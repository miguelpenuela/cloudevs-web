import { Component, inject, OnInit } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {ProjectCard} from '../../shared/components/project-card/project-card';
import {ProjectInfoCard} from '../../shared/models/IProjectInfoCard';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';
import {SeoService} from '../../shared/services/seo.service';

@Component({
  selector: 'portfolio-section',
  imports: [
    EnfasisTag,
    ProjectCard,
    AnimateOnScrollDirective,
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.set({
      title: 'Portafolio | Cloudevs',
      description: 'Conoce nuestros proyectos: plataformas web, apps móviles y sistemas empresariales que hemos construido para nuestros clientes.',
      keywords: 'portafolio proyectos software, casos de éxito, desarrollo web Colombia, aplicaciones móviles',
      canonical: 'https://www.cloudevs.co/portfolio',
    });
  }

    public projects: ProjectInfoCard[] = [
      {
        topic: 'Desarrollo web',
        title: 'Fasomes - Mensajería',
        description: 'Plataforma completa de gestión de envíos de mensajería a través de diferentes franquicias como Interrapidisimo, Coodinadora y/o Envía.',
        tags: ["Angular", "Laravel", "MySQL"],
        path: "",
        externalLink: "",
        image: "dummy.png",
      }
    ];
}
