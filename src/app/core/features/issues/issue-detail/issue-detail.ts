import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Issue, IssueService} from '../issue-service';

@Component({
  selector: 'app-issue-detail',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './issue-detail.html',
  styleUrls: ['./issue-detail.css']
})

export class IssueDetail {
  issue!: Issue;
  issueService = inject(IssueService);
  readonly DISABLED_BUTTON_TEXT = "Download steht bald zur Verfügung";
  readonly issuesUrl = 'ausgaben';

  constructor(private route: ActivatedRoute) {
    const issueId = this.route.snapshot.paramMap.get('id');
    this.issue = this.issueService.getIssues().find(issue => issue.id === Number(issueId)) || this.issueService.getIssues()[0];
  }
}