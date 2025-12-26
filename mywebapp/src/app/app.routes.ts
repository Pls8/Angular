import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];
