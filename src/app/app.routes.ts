import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
    {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: ComingsoonComponent,
  },
  {
    path: 'contact',
    component: ComingsoonComponent,
  },
    {
    path: 'services',
    component: ComingsoonComponent,
  },
  { path: 'coming-soon', component: ComingsoonComponent }

];
