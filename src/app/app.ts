import {Component} from '@angular/core';
import {MainLayout} from './core/layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = 'derenzeit-page-angular';
}