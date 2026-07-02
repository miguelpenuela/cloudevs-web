import { Component, inject, OnInit } from '@angular/core';
import {IInfoCard} from '../../shared/models/IInfoCard';
import {InfoCard} from '../../shared/components/info-card/info-card';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';
import {SeoService} from '../../shared/services/seo.service';

@Component({
  selector: 'services-section',
  imports: [
    InfoCard,
    EnfasisTag,
    AnimateOnScrollDirective,
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.set({
      title: 'Servicios | Cloudevs',
      description: 'Desarrollo web, apps móviles, Cloud & DevOps, Backend & APIs, UX/UI y consultoría tech. Soluciones escalables para tu negocio.',
      keywords: 'desarrollo web, apps móviles, cloud devops AWS, backend APIs, UX UI diseño, consultoría tech',
      canonical: 'https://www.cloudevs.co/services',
    });
  }

  servicesList: IInfoCard[] = [
    {
      icon: 'fa fa-code',
      name: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y escalables con las últimas tecnologías.'
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
