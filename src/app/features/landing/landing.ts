import {Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Home} from '../home/home';
import {Services} from '../services/services';
import {About} from '../about/about';
import {Portfolio} from '../portfolio/portfolio';
import {Contact} from '../contact/contact';
import {SeoService} from '../../shared/services/seo.service';

@Component({
  selector: 'app-landing',
  imports: [
    Home,
    Services,
    About,
    Portfolio,
    Contact
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Landing implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.set({
      title: 'Cloudevs | Desarrollo de Software en la Nube',
      description: 'Expertos en desarrollo web, apps móviles, Cloud & DevOps y consultoría tech. Más de 10 años creando soluciones tecnológicas innovadoras que impulsan tu negocio.',
      keywords: 'desarrollo web, apps móviles, cloud, devops, AWS, Angular, software, Colombia, consultoría tecnológica',
      canonical: 'https://www.cloudevs.co',
    });

    this.seo.addJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.cloudevs.co/#organization',
          name: 'Cloudevs',
          url: 'https://www.cloudevs.co',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.cloudevs.co/geek_cat_head_bg.ico',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'admin@cloudevs.co',
            contactType: 'customer service',
            availableLanguage: ['Spanish', 'English'],
          },
          sameAs: [],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.cloudevs.co/#website',
          url: 'https://www.cloudevs.co',
          name: 'Cloudevs',
          description: 'Desarrollo de Software en la Nube',
          publisher: { '@id': 'https://www.cloudevs.co/#organization' },
          inLanguage: 'es-CO',
        },
      ],
    });
  }
}
