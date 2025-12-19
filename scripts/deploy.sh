#!/bin/bash

# --- Configuration Variables ---

NG_BUILD_CMD="ng build --configuration production"
MAIN_BRANCH_NAME="main"
temp=$( realpath "$0"  ) && ROOT_DIR=$(dirname $(dirname "$temp")) # Calling dirname twice goes to the parent directory. Neat!
DIST_FOLDER="${ROOT_DIR}/dist/derenzeit-page-angular"

set -e
set -u

# --- Utility Function for Logging and Error Handling ---

Red='\033[1;31m'
Color_Off='\033[0m'
Green='\033[1;32m'

log_info() {
    echo -e "${Green}[INFO]${Color_Off} $1"
}

log_error() {
    echo -e "${Red}[ERROR]${Color_Off} $1" >&2
    exit 1
}

# --- Git Operations: Checkout and Pull ---
log_info "Starting deployment process..."
log_info "Checking out ${MAIN_BRANCH_NAME} branch and pulling latest changes."

if git rev-parse --verify "${MAIN_BRANCH_NAME}" >/dev/null 2>&1; then
    git checkout "${MAIN_BRANCH_NAME}" || log_error "Failed to checkout ${MAIN_BRANCH_NAME} branch."
else
    log_error "The ${MAIN_BRANCH_NAME} branch does not exist in this repository."
fi

git pull --ff-only || log_error "Failed to pull latest changes from ${MAIN_BRANCH_NAME}. Please resolve local conflicts if necessary."

log_info "Git operations completed successfully."

# --- Build the Angular Application ---
log_info "Building the Angular application..."

command -v ng >/dev/null 2>&1 || log_error "Angular CLI ('ng' command) is not found. Please ensure it is installed (npm install -g @angular/cli)."

$NG_BUILD_CMD || log_error "The Angular build failed. Check the output for build errors."

if [ ! -d "$DIST_FOLDER" ]; then
    log_error "Build output folder '$DIST_FOLDER' not found. Please verify the build command and DIST_FOLDER variable."
fi

log_info "Angular application built successfully. Output in '$DIST_FOLDER'."

log_info "Beginning deployment"

if [ -f .deploy_creds ]; then
    source .deploy_creds
else
    log_error ".deploy_creds file not found!"
fi

lftp -c "
  open -u $STRATO_USER,$STRATO_PASS $STRATO_HOST;
  set sftp:auto-confirm yes
  mirror -R \
      --delete \
      --only-newer \
      --parallel=5 \
      $DIST_FOLDER /
  quit;
"

log_info "Deployment completed successfully! Files are now live on the server."
