/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `

    <header>
      <nav class="top-nav">
        <div class="container">
          <div class="nav-wrapper"><a class="page-title">Admin</a></div>
        </div>
      </nav>

      <ul id="nav-mobile" class="side-nav fixed" style="transform: translateX(0%);">
        <li class="logo"><a [routerLink]=" ['./']" id="logo-container" class="brand-logo">Logo</a></li>
        <li class="bold"><a [routerLink]=" ['./clientes'] ">Clientes</a></li>
        <li class="bold"><a [routerLink]=" ['./historico'] ">Histórico</a></li>
      </ul>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}