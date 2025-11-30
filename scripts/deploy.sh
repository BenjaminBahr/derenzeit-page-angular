#!/bin/bash

# --- Configuration Variables ---

NG_BUILD_CMD="ng build --configuration production"
MAIN_BRANCH_NAME="main"
temp=$( realpath "$0"  ) && ROOT_DIR=$(dirname $(dirname "$temp")) # Calling dirname twice goes to the parent directory. Neat!
DIST_FOLDER="${ROOT_DIR}/dist/derenzeit-page-angular"

# Set -e: Exit immediately if a command exits with a non-zero status. This handles "stop on error."
set -e
# Set -u: Treat unset variables as an error.
set -u

# --- Utility Function for Logging and Error Handling ---

Red='\033[1;31m'
Color_Off='\033[0m'
Green='\033[1;32m'

# Displays an info message.
log_info() {
    echo -e "${Green}[INFO]${Color_Off} $1"
}

# Displays an error message and exits (set -e handles the exit, but this provides context).
log_error() {
    echo -e "${Red}[ERROR]${Color_Off} $1" >&2
    exit 1
}

# --- Basic check for presence of variables ---

SFTP_HOST=${SFTP_HOST:-}
SFTP_USER=${SFTP_USER:-}
SFTP_PW_FILE=${SFTP_PW_FILE:-}

if [ -z "${SFTP_USER}" ] || [ -z "${SFTP_HOST}" ]; then
  log_error "Variables SFTP_USER or SFTP_HOST not set."
  exit 1
fi

if [ -z "${SFTP_PW_FILE}" ]; then
  log_error "Variable SFTP_PW_FILE not set."
  exit 1
fi

if [ ! -f "${SFTP_PW_FILE}" ]; then
  log_error "Password file ${SFTP_PW_FILE} not found."
  exit 1
fi


# --- Git Operations: Checkout and Pull ---
log_info "Starting deployment process..."
log_info "1. Checking out ${MAIN_BRANCH_NAME} branch and pulling latest changes."

# Check if main/master branch exists and switch to it
if git rev-parse --verify "${MAIN_BRANCH_NAME}" >/dev/null 2>&1; then
    git checkout "${MAIN_BRANCH_NAME}" || log_error "Failed to checkout ${MAIN_BRANCH_NAME} branch."
else
    log_error "The ${MAIN_BRANCH_NAME} branch does not exist in this repository."
fi

# Pull the latest changes
git pull --ff-only || log_error "Failed to pull latest changes from ${MAIN_BRANCH_NAME}. Please resolve local conflicts if necessary."

log_info "Git operations completed successfully."

# --- 2. Build the Angular Application ---
log_info "2. Building the Angular application..."

# Check for 'ng' command
command -v ng >/dev/null 2>&1 || log_error "Angular CLI ('ng' command) is not found. Please ensure it is installed (npm install -g @angular/cli)."

# Run the build command
$NG_BUILD_CMD || log_error "The Angular build failed. Check the output for build errors."

# Verify if the output folder exists
if [ ! -d "$DIST_FOLDER" ]; then
    log_error "Build output folder '$DIST_FOLDER' not found. Please verify the build command and DIST_FOLDER variable."
fi

log_info "Angular application built successfully. Output in '$DIST_FOLDER'."

# --- 3. & 4. SFTP Configuration and Connection Setup ---
log_info "3. Configuring SFTP connection parameters."



echo "SFTP_USER: $SFTP_USER"

# Check if environment variables are set
if [ -z "$SFTP_USER" ] || [ -z "$SFTP_HOST" ] ; then
    log_info "SFTP credentials are not set via environment variables. Asking for interactive input."

    # Interactive input fallback
    read -p "Enter SFTP Username: " SFTP_USER
    read -p "Enter SFTP Host: " SFTP_HOST

    if [ -z "$SFTP_USER" ] || [ -z "$SFTP_HOST" ]; then
        log_error "SFTP connection details cannot be empty."
    fi

    # Since we are using interactive input, we will fall back to an interactive SFTP session,
    # which is simpler and doesn't rely on sshpass for password input.
    SFTP_COMMAND="sftp $SFTP_USER@$SFTP_HOST"
    INTERACTIVE=true
else
    log_info "Using environment variables for non-interactive connection."
    # Non-interactive mode requires a method to handle the password if SSH keys aren't used.
    # We will use a dedicated batch file for SFTP commands.
    SFTP_COMMAND_FILE=$(mktemp)

    # SFTP Batch Commands
    cat > "$SFTP_COMMAND_FILE" <<- EOCMD
    # Change local directory to the build folder
    lcd "$DIST_FOLDER"

    # Upload everything recursively (all files and folders)
    # The -r flag is critical for uploading the whole application structure.
    put -r *

    # Exit SFTP
    bye
EOCMD

    SFTP_COMMAND="sftp -b $SFTP_COMMAND_FILE $SFTP_USER@$SFTP_HOST"
    INTERACTIVE=false
fi

# --- 5. Upload Everything via SFTP ---
log_info "4. Starting file upload to $SFTP_HOST..."
log_info "Executing SFTP batch file commands."

    # If using password in SFTP_PASS, this requires 'sshpass' to be installed and used,
    # which is outside the scope of a basic script. We rely on key-based authentication
    # or the user setting up passwordless connection, or using a tool like sshpass externally.
    # For robustness, we will attempt the connection directly. If it requires a password
    # and none is provided interactively, it will fail (and set -e will catch it).

    # If SFTP_PASS is set, we use sshpass (if available) - this is a non-standard dependency.
    if [ -n "$SFTP_PASS" ]; then
        command -v sshpass >/dev/null 2>&1 || log_error "SFTP_PASS is set, but 'sshpass' is required for non-interactive password login. Please install 'sshpass' or use SSH keys."
        echo "$SFTP_PASS" | sshpass -P 'password' $SFTP_COMMAND || log_error "SFTP upload failed using SFTP_PASS. Check host/user/password and remote path."
    else
        # Assuming SSH Key-based authentication if no password is set
        $SFTP_COMMAND || log_error "SFTP upload failed. Check SSH key setup, host, user, and remote path."
    fi

    # Clean up the temporary SFTP command file
    rm -f "$SFTP_COMMAND_FILE"
fi

log_info "Deployment completed successfully! Files are now live on the server."

# --- End of Script ---
