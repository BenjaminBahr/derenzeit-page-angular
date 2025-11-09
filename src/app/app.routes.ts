import {Routes} from '@angular/router';

export const routes: Routes = [
    // Redirect empty path to the welcome page
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},

    {
      path: 'welcome',
      loadComponent: () => import('./core/features/welcome/welcome')
        .then(m => m.Welcome),
      title: 'Welcome - [Fanzine Name]'
    },
    {
      path: 'about',
      loadComponent: () => import('./core/features/about/about')
        .then(m => m.About),
      title: 'Über uns'
    },
    {
      path: 'issues',
      loadComponent: () => import('./core/features/issues/issues')
        .then(m => m.Issues)
    },
    {
      path: 'legal',
      loadComponent: () => import('./core/features/legal/legal')
        .then(m => m.Legal),
      title: 'Legal - [Fanzine Name]'
    },
    // 404/Not Found Handler
    {path: '**', redirectTo: 'welcome'}
  ]
;
