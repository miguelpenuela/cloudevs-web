import {Component, inject} from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'home-section',
  imports: [
    EnfasisTag
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private scroller = inject(ViewportScroller);

  goTo(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  }

}
