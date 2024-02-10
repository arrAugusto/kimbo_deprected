import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard', component: NavigationBarComponent},
    {path: 'sidebar', component: SideBarComponent}
];
