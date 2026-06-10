import {Component, inject, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Home} from '../home/home';
import {NavigationMenu} from '../../shared/components/navigation-menu/navigation-menu';
import {Services} from '../services/services';
import {About} from '../about/about';
import {ViewportScroller} from '@angular/common';
import {Portfolio} from '../portfolio/portfolio';
import {Contact} from '../contact/contact';

@Component({
  selector: 'app-landing',
  imports: [
    Home,
    Services,
    About,
    Portfolio,
    Contact
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Landing {

}
