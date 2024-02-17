import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutComponent } from './admin-layout.component';
import { FormInsComponent } from '../app/components/form-ins/form-ins.component';

// Definir las rutas utilizando el objeto Routes
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: FormInsComponent,
      },
      // Otras rutas
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configurar las rutas principales utilizando RouterModule.forRoot
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
