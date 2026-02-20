import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Issue, IssueService} from '../issue-service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-issue-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './issue-detail.html',
  styleUrl: './issue-detail.css',
})

export class IssueDetail {
  issue!: Issue;
  issueService = inject(IssueService);
  readonly DISABLED_BUTTON_TEXT = "Download läuft bald zur Verfügung";

  constructor(private route: ActivatedRoute) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    this.issue = this.issueService.getIssues().find(issue => issue.id === id) || this.issueService.getIssues()[0];
  }
}