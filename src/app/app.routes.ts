import {Routes} from '@angular/router';

export const welcomeUrl = 'willkommen';
export const aboutUrl = 'ueberuns';
export const issuesUrl = 'ausgaben';
export const legalUrl = 'impressum';

export const routes: Routes = [
    // Redirect empty path to the welcome page
    {path: '', redirectTo: welcomeUrl, pathMatch: 'full'},

    {
      path: welcomeUrl,
      loadComponent: () => import('./core/features/welcome/welcome')
        .then(m => m.Welcome),
      title: 'Willkommen'
    },
    {
      path: aboutUrl,
      loadComponent: () => import('./core/features/about/about')
        .then(m => m.About),
      title: 'Über uns'
    },
    {
      path: issuesUrl,
      loadComponent: () => import('./core/features/issues/issues')
        .then(m => m.Issues),
      title: 'Ausgaben'
    },
    {
      path: legalUrl,
      loadComponent: () => import('./core/features/legal/legal')
        .then(m => m.Legal),
      title: 'Impressum'
    },
    // 404/Not Found Handler
    {path: '**', redirectTo: welcomeUrl}
  ]
;
