import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarComponent } from '../components/side-bar/side-bar.component'; 
import { NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SideBarComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
})
export class AppModule { }
