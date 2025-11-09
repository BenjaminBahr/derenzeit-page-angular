import {Component, inject} from '@angular/core';
import {Issue, IssueService} from './issue-service';

@Component({
  selector: 'app-issues',
  imports: [

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
