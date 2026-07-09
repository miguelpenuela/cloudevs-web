import {Component, Input} from '@angular/core';
import {ProjectInfoCard} from '../../models/IProjectInfoCard';
import {TechnologiesEnum} from '../../enums/technologiesEnum';
import {CategoryEnum} from '../../enums/categoryEnum';

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
    tags: [TechnologiesEnum.REACT, TechnologiesEnum.NODEJS, TechnologiesEnum.MONGO_DB],
    path: "",
    externalLink: "",
    image: "dummy.png",
    category: CategoryEnum.SoftwareAsAService
  };
}
