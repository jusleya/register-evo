import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full',
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/register/register').then((c) => c.RegisterComponent),
  },
  {
    path: 'informacoes',
    loadComponent: () =>
      import('./pages/information/information').then((c) => c.InformationComponent),
  },
];
