import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
    component: ContactComponent,
  },
  {
    path: 'services',
    component: ComingsoonComponent,
  },
  { path: 'coming-soon', component: ComingsoonComponent }

];
