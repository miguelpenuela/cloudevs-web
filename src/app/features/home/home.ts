import { Component } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';

@Component({
  selector: 'home-section',
  imports: [
    EnfasisTag
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
