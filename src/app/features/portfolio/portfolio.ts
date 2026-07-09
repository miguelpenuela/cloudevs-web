import { Component, inject, OnInit } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {ProjectCard} from '../../shared/components/project-card/project-card';
import {ProjectInfoCard} from '../../shared/models/IProjectInfoCard';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';
import {SeoService} from '../../shared/services/seo.service';
import {CategoryEnum} from '../../shared/enums/categoryEnum';
import {TechnologiesEnum} from '../../shared/enums/technologiesEnum';
import {CategoryTag} from '../../shared/components/category-tag/category-tag';
import {projectsList} from '../../shared/data/projects';

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
  public projects: ProjectInfoCard[] = [];
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.set({
      title: 'Portafolio | Cloudevs',
      description: 'Conoce nuestros proyectos: plataformas web, apps móviles y sistemas empresariales que hemos construido para nuestros clientes.',
      keywords: 'portafolio proyectos software, casos de éxito, desarrollo web Colombia, aplicaciones móviles',
      canonical: 'https://www.cloudevs.co/portfolio',
    });
    this.projects = projectsList;
  }

  handleCategorySelected(selectedCategory: any) {
    if (selectedCategory === 'Todo') {
      this.projects = projectsList;
      return;
    }
    this.projects = projectsList.filter(project => project.category === selectedCategory);
  }
}
