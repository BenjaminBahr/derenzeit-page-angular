import {Routes} from '@angular/router';

export const routes: Routes = [
    // Redirect empty path to the welcome page
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},

    // 1. WelcomePage (Lazy loaded)
    {
      path: 'welcome',
      loadComponent: () => import('./core/features/welcome/welcome')
        .then(m => m.Welcome),
      title: 'Welcome - [Fanzine Name]'
    },
    // 2. Issues Feature (List + Detail views)
    {
      path: 'issues',
      loadChildren: () => import('./core/features/issues/issues')
        .then(m => m.Issues)
    },
    // 3. Legal Page (Lazy loaded)
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
