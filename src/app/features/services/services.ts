import { Component } from '@angular/core';
import {IInfoCard} from '../../shared/models/IInfoCard';
import {InfoCard} from '../../shared/components/info-card/info-card';

@Component({
  selector: 'services-section',
  imports: [
    InfoCard
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  servicesList: IInfoCard[] = [
    {
      icon: 'fa fa-code',
      name: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y escalables cons las últimas tecnologías.'
    },
    {
      icon: 'fa fa-mobile-screen',
      name: 'Apps Móviles',
      description: 'Desarrollo de aplicaciones nativas e híbridas para iOS y Android que tus usuarios amarán.'
    },
    {
      icon: 'fa-regular fa-cloud',
      name: 'Cloud & DevOps',
      description: 'Implementación y gestión de infraestructura en la nube con AWS.'
    },
    {
      icon: 'fa fa-database',
      name: 'Backend & APIs',
      description: 'Arquitecturas robustas y APIs RESTful que escalan con tu negocio.'
    },
    {
      icon: 'fa fa-palette',
      name: 'UX/UI',
      description: 'Diseños atractivos y funcionales que mejoran la experiencia de usuario.'
    },
    {
      icon: 'fa fa-glasses',
      name: 'Consultoría Tech',
      description: 'Asesoramiento en arquitectura, stack tecnológico y mejores prácticas.'
    }
  ]

}
