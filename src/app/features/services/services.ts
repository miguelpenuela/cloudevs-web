import { Component } from '@angular/core';
import {IServiceCardInfo} from '../../shared/models/IServiceCardInfo';
import {ServiceCard} from '../../shared/components/service-card/service-card';

@Component({
  selector: 'services-section',
  imports: [
    ServiceCard
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  servicesList: IServiceCardInfo[] = [
    {
      icon: '',
      name: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y escalables cons las últimas tecnologías.'
    },
    {
      icon: '',
      name: 'Apps Móviles',
      description: 'Desarrollo de aplicaciones nativas e híbridas para iOS y Android que tus usuarios amarán.'
    },
    {
      icon: '',
      name: 'Cloud & DevOps',
      description: 'Implementación y gestión de infraestructura en la nube con AWS.'
    },
    {
      icon: '',
      name: 'Backend & APIs',
      description: 'Arquitecturas robustas y APIs RESTful que escalan con tu negocio.'
    },
    {
      icon: '',
      name: 'UX/UI',
      description: 'Diseños atractivos y funcionales que mejoran la experiencia de usuario.'
    },
    {
      icon: '',
      name: 'Consultoría Tech',
      description: 'Asesoramiento en arquitectura, stack tecnológico y mejores prácticas.'
    }
  ]

}
