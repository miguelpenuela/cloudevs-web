import { Component } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {ProjectCard} from '../../shared/components/project-card/project-card';
import {ProjectInfoCard} from '../../shared/models/IProjectInfoCard';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';

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
export class Portfolio {
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
