import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component'; 
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'mainpage', component: MainPageComponent },
  { path: '', component: LandingPageComponent }

];