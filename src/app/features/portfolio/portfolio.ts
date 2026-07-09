import { Component, inject, OnInit } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {ProjectCard} from '../../shared/components/project-card/project-card';
import {ProjectInfoCard} from '../../shared/models/IProjectInfoCard';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';
import {SeoService} from '../../shared/services/seo.service';
import {CategoryEnum} from '../../shared/enums/categoryEnum';
import {TechnologiesEnum} from '../../shared/enums/technologiesEnum';
import {CategoryTag} from '../../shared/components/category-tag/category-tag';

@Component({
  selector: 'portfolio-section',
  imports: [
    EnfasisTag,
    ProjectCard,
    AnimateOnScrollDirective,
    CategoryTag,
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {

  public categories: string[] = Object.values(CategoryEnum);

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
      tags: [
        TechnologiesEnum.ANGULAR,
        TechnologiesEnum.LARAVEL,
        TechnologiesEnum.MYSQL
      ],
      path: "",
      externalLink: "",
      image: "dummy.png",
      category: CategoryEnum.CustomSoftware
    },
    {
      topic: 'Software as a Service',
      title: 'Factory',
      description: `Plataforma para la gestión de su negocio, realice la configuración para la producción de sus productos,
      formulaciones e inventarios.`,
      tags: [
        TechnologiesEnum.ANGULAR,
        TechnologiesEnum.JAVA,
        TechnologiesEnum.SPRING_BOOT,
        TechnologiesEnum.POSTGRESQL,
      ],
      path: "",
      externalLink: "",
      image: "dummy.png",
      category: CategoryEnum.CustomSoftware
    }
  ];

  handleCategorySelected(selectedCategory: any) {
    console.log('selectedCategory', selectedCategory);
  }
}
