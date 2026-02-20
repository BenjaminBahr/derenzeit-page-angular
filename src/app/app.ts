import {Component} from '@angular/core';
import {MainLayout} from './core/layout/main-layout/main-layout';
import {IssueService} from './core/features/issues/issue-service';

@Component({
  selector: 'app-root',
  imports: [MainLayout, IssueService],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [IssueService]
})

export class App {
  protected readonly title = 'derenzeit-page-angular';
}