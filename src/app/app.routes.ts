import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sobre-mim',
    loadComponent: () => import('./sobre-mim/sobre-mim.page').then( m => m.SobreMimPage)
  },
];
