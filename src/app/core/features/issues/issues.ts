import {Component, inject} from '@angular/core';
import {Issue, IssueService} from './issue-service';
import {CommonModule} from "@angular/common";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-issues',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './issues.html',
  styleUrl: './issues.css',
})

export class Issues {

  issues: Issue[] = []
  issueService = inject(IssueService);

  protected readonly issuesUrl = 'ausgaben';

  constructor() {
    this.issues = this.issueService.getIssues();
  }
}