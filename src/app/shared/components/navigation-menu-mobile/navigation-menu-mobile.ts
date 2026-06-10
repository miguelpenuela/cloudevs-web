import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'navigation-menu-mobile',
  imports: [
    RouterLink
  ],
  templateUrl: './navigation-menu-mobile.html',
  styleUrl: './navigation-menu-mobile.scss',
})
export class NavigationMenuMobile implements OnChanges {

  @Input() menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('NavigationMenuMobile.changes: ', changes);
  }

}
