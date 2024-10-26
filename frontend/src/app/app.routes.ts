import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { FoodMenuComponent } from './modules/food-menu/food-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    title: 'Menu',
    path: 'menu',
    component: FoodMenuComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
