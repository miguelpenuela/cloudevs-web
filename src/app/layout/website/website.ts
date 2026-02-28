import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavigationMenu} from '../../shared/components/navigation-menu/navigation-menu';
import {ContactInfo} from '../../shared/components/contact-info/contact-info';

@Component({
  selector: 'app-website',
  imports: [
    RouterOutlet,
    NavigationMenu,
  ],
  templateUrl: './website.html',
  styleUrl: './website.scss',
  standalone: true
})
export class Website {

}
