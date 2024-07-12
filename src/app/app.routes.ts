import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/timer.page',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'settimer',
    loadComponent: () => import('./settimer/settimer.page').then( m => m.SettimerPage)
  },
  {
    path: 'timer',
    loadComponent: () => import('./timer/timer.page').then( m => m.TimerPage)
  },
  {
    path: 'alltimer',
    loadComponent: () => import('./alltimer/alltimer.page').then( m => m.AlltimerPage)
  },
];
