import {Component, Input} from '@angular/core';
import {ProjectInfoCard} from '../../models/IProjectInfoCard';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() project: ProjectInfoCard = {
    topic: 'desarrollo web',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico con gestión de inventario, pagos y analytics.',
    tags: ["React", "Node.js", "MongoDB"],
    path: "",
    externalLink: "",
    image: "dummy.png",
  };
}
