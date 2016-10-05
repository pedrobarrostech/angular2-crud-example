import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
    <header>
      <nav class="top-nav">
        <div class="container">
          <div class="nav-wrapper"><a class="page-title">Admin</a></div>
        </div>
      </nav>

      <ul id="nav-mobile" class="side-nav fixed" style="transform: translateX(0%);">
        <li class="logo"><a [routerLink]=" ['../home']" id="logo-container" class="brand-logo">Logo</a></li>
        <li class="bold"><a [routerLink]=" ['../clientes'] ">Clientes</a></li>
        <li class="bold"><a [routerLink]=" ['../historico'] ">Histórico</a></li>
        <li class="bold"><a [routerLink]=" ['../login'] ">Logout</a></li>
      </ul>
    </header>
  `
})
export class Menu {

}
