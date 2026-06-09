import {Component, Input} from '@angular/core';
import {IServiceCardInfo} from '../../models/IServiceCardInfo';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  @Input() serviceCardInfo: IServiceCardInfo | null = null;
}
