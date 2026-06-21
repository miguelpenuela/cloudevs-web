import { Component } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {InfoCard} from '../../shared/components/info-card/info-card';
import {ProjectCard} from '../../shared/components/project-card/project-card';
import {ProjectInfoCard} from '../../shared/models/IProjectInfoCard';

@Component({
  selector: 'portfolio-section',
  imports: [
    EnfasisTag,
    ProjectCard,
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
