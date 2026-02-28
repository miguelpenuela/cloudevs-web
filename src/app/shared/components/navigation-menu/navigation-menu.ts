import { Component } from '@angular/core';
import {ContactInfo} from "../contact-info/contact-info";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation-menu',
  imports: [
    ContactInfo,
    RouterLink
  ],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss',
  standalone: true
})
export class NavigationMenu {

}
