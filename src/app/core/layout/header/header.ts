import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {welcomeUrl, aboutUrl, issuesUrl, legalUrl} from '../../../app.routes';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  protected readonly welcomeUrl = welcomeUrl;
  protected readonly issuesUrl = issuesUrl;
  protected readonly aboutUrl = aboutUrl;
  protected readonly legalUrl = legalUrl;
}
