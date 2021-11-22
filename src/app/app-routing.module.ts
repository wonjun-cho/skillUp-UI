import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  // { path: 'home', component: HomeComponent},
  // { path: 'edit/:id', component: EditComponent}
  { path: 'home', component: HomeComponent, canActivate:[AuthService]},
  { path: 'edit/:id', component: EditComponent, canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
