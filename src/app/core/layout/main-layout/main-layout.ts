import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterLink,
    RouterOutlet,
    Footer,
    Header
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
