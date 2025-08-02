import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './pages/dashboard';
import { authGuard } from './guards/auth-guard'; 
export const appRoutes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' } // catch-all opcional
];

