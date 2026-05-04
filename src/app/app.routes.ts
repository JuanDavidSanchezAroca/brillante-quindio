import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home/home.component').then(m => m.HomeComponent),
    title: 'Brillante Quindío | Productos de Aseo'
  },
  {
    path: 'productos',
    loadComponent: () => import('@features/products/products.component').then(m => m.ProductsComponent),
    title: 'Catálogo de Productos | Brillante Quindío'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('@features/about/about.component').then(m => m.AboutComponent),
    title: 'Nosotros | Brillante Quindío'
  },
  {
    path: 'contacto',
    loadComponent: () => import('@features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | Brillante Quindío'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
