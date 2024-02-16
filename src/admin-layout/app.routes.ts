import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../app/login/login.component";
import { NavigationBarComponent } from "../app/components/navigation-bar/navigation-bar.component";
import { SideBarComponent } from "../app/components/side-bar/side-bar.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: NavigationBarComponent },
    { path: 'sidebar', component: SideBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
