import { Component } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {InfoCard} from '../../shared/components/info-card/info-card';

@Component({
  selector: 'portfolio-section',
  imports: [
    EnfasisTag,
    InfoCard
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {

}
