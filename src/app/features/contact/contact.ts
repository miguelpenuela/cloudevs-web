import { Component } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'contact-section',
  imports: [
    EnfasisTag,
    AnimateOnScrollDirective,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
