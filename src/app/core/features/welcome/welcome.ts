import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {issuesUrl} from '../../../app.routes';

@Component({
  selector: 'app-welcome',
  imports: [
    RouterLink
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  derenzeitLogoPath = 'images/Derenzeit_Titel.png';
  protected readonly issuesUrl = issuesUrl;
}
