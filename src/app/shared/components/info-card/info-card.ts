import {Component, Input} from '@angular/core';
import {IInfoCard} from '../../models/IInfoCard';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
})
export class InfoCard {
  @Input() infoCard: IInfoCard | null = null;
  @Input() backgroundColor: string = '';
}
