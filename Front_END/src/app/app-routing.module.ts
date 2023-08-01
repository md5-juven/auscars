import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { UserCartComponent } from './user-cart/user-cart.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"navbar", component: NavBarComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegistrationComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"dashboard/:model", component: EditVehicleComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard]},
  {path:"user-cart", component: UserCartComponent, canActivate: [AuthGuard]},
  {path:'', redirectTo:"home", pathMatch: "full"},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
