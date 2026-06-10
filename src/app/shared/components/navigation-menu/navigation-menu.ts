import {Component, inject} from '@angular/core';
import {RouterLink, Router} from "@angular/router";
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss',
  standalone: true
})
export class NavigationMenu {

  private router: Router = inject(Router);
  private scroller = inject(ViewportScroller);

  goTo(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  }

}
