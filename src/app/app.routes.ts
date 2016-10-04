import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Clients } from './clients';
import { History } from './history';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'clientes', component: Clients },
  { path: 'historico', component: History },
  { path: '**',    component: NoContent },
];
