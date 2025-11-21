import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [
    RouterLink
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  derenzeitLoewePath = 'images/Loewe_02.png';
  derenzeitLogoPath = 'images/Derenzeit_Titel_01.png';
  derenzeitDrachePath = 'images/Drache_02.png';
}
