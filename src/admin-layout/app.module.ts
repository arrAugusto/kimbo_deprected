import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppSideBarComponent } from '../app/components/side-bar/side-bar.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { NavigationBarComponent } from '../app/components/navigation-bar/navigation-bar.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppSideBarComponent,
    NavigationBarComponent,
    AdminLayoutComponent,
  ],
  // otras propiedades del módulo...
})
export class AppModule {}
