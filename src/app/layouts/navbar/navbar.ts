import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  isMenuOpen = false;

  links = [
    {
      id:0,
      label: "Home",
      url: "/"
    },
    {
      id:1,
      label: "My Library",
      url: "/library"
    }
  ]

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
