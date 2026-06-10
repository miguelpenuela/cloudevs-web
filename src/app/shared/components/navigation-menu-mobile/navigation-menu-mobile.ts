import {Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ViewportScroller} from '@angular/common';

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
  @Output() menuClosed = new EventEmitter();

  private scroller = inject(ViewportScroller);

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.menuClosed.emit(this.menuClosed);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('NavigationMenuMobile.changes: ', changes);
  }

  goTo(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  }
}
