import { Component } from '@angular/core';
import {IInfoCard} from '../../shared/models/IInfoCard';
import {InfoCard} from '../../shared/components/info-card/info-card';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'about-section',
  imports: [
    InfoCard,
    EnfasisTag,
    AnimateOnScrollDirective,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  values: IInfoCard[] = [
    {
      icon: 'fa fa-users',
      name: 'Trabajo en equipo',
      description: 'Colaboración estrecha con nuestros clientes en cada fase del proyecto.'
    },
    {
      icon: 'fa fa-ranking-star',
      name: 'Excelencia',
      description: 'Comprometidos con la calidad en cada línea de código.'
    },
    {
      icon: 'fa fa-bullseye',
      name: 'Enfoque en Resultados',
      description: 'Orientados a cumplir objetivos y superar expectativas.'
    },
    {
      icon: 'fa fa-heart',
      name: 'Pasión por la Tecnología',
      description: 'Amamos lo que hacemos y se nota en cada proyecto.'
    }
  ];

}
