import {Component, inject} from '@angular/core';
import {RouterLink, Router} from "@angular/router";
import {ViewportScroller} from '@angular/common';
import {NavigationMenuMobile} from '../navigation-menu-mobile/navigation-menu-mobile';

@Component({
  selector: 'app-navigation-menu',
  imports: [
    RouterLink,
    NavigationMenuMobile
  ],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss',
  standalone: true
})
export class NavigationMenu {

  private router: Router = inject(Router);
  private scroller = inject(ViewportScroller);

  showMenu = false;

  goTo(sectionId: string) {
    this.router.navigate(['/']);
    this.scroller.scrollToAnchor(sectionId);
  }

  showMobileMenu() {
    this.showMenu = true;
  }

  handleMenuClosed() {
    this.showMenu = false;
  }
}
