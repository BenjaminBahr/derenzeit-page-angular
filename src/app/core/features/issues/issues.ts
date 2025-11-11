import {Component, inject} from '@angular/core';
import {Issue, IssueService} from './issue-service';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-issues',
  imports: [
    CommonModule
  ],
  templateUrl: './issues.html',
  styleUrl: './issues.css',
})
export class Issues {

  issues: Issue[] = []
  issueService = inject(IssueService);

  constructor() {
    this.issues = this.issueService.getIssues();
  }
}
