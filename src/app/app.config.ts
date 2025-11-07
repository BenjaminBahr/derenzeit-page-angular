import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';

import {provideRouter, Routes} from '@angular/router';
import {MainLayout} from './core/layout/main-layout/main-layout';

const routes: Routes = [
  // Redirect empty path to the welcome page
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},

  // Main layout shell for all feature pages
  {
    path: '',
    component: MainLayout, // This is the shell with <router-outlet>
    children: [
      // 1. Welcome Page (Lazy loaded)
      {
        path: 'welcome',
        loadComponent: () => import('./features/welcome/welcome')
          .then(m => m.WelcomeComponent),
        title: 'Welcome - [Fanzine Name]'
      },
      // 2. Issues Feature (List + Detail views)
      {
        path: 'issues',
        loadChildren: () => import('./features/issues/issues.routes')
          .then(m => m.ISSUES_ROUTES)
      },
      // 3. Legal Page (Lazy loaded)
      {
        path: 'legal',
        loadComponent: () => import('./features/legal/legal.component')
          .then(m => m.LegalComponent),
        title: 'Legal - [Fanzine Name]'
      },
      // 404/Not Found Handler
      {path: '**', redirectTo: 'welcome'}
    ]
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes)
  ]
};
