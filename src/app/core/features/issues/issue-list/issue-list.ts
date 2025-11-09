import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngFor
import { RouterModule } from '@angular/router'; // Needed for routerLink directive

// 1. Define the data structure (Interface for type safety)
interface Issue {
  id: number;
  name: string;
}

@Component({
  selector: 'app-issue-list',
  standalone: true,
  // Import necessary Angular features for the template
  imports: [CommonModule, RouterModule],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.css'
})
export class IssueListComponent implements OnInit {
  // 2. Property to hold the list of issues
  public issues: Issue[] = [];

  constructor() {
    // In a real application, you would inject an IssueService here.
  }

  ngOnInit(): void {
    // 3. Load the data when the component initializes
    this.loadIssues();
  }

  /**
   * Loads the list of issues, simulating a service call.
   */
  private loadIssues(): void {
    // Replace this mock data with a call to an API service later
    const mockIssues: Issue[] = [
      { id: 1, name: 'Issue 1: The Debut' },
      { id: 2, name: 'Issue 2: Second Wave' },
      { id: 3, name: 'Issue 3: Summer Special' },
      { id: 4, name: 'Issue 4: Late Harvest' },
      { id: 5, name: 'Issue 5: Anniversary Edition' },
      { id: 6, name: 'Issue 6: Fresh Start' },
    ];

    // Simulate sorting the issues, e.g., by ID descending
    this.issues = mockIssues.sort((a, b) => b.id - a.id);
  }

  // --- Example Method for future expansion (e.g., Filtering) ---
  public filterIssues(term: string): void {
    if (!term) {
      this.loadIssues(); // Reset list if filter is empty
      return;
    }
    // Simple filter logic
    this.issues = this.issues.filter(issue =>
      issue.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
