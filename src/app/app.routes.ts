import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Clients } from './clients';
import { History } from './history';
import { NoContent } from './no-content';

import { Login } from './login/index';
import { AuthGuard } from './_guards/index';
import { DataResolver } from './app.resolver';

const appRoutes: Routes = [
    { path: 'login', component: Login },
    { path: '', component: Home, canActivate: [AuthGuard] },
    { path: 'home',  component: Home, canActivate: [AuthGuard] },
    { path: 'clientes', component: Clients, canActivate: [AuthGuard] },
    { path: 'historico', component: History, canActivate: [AuthGuard] },
    
    // otherwise redirect to home
    { path: '**',    component: NoContent },
];

export const ROUTES = RouterModule.forRoot(appRoutes);