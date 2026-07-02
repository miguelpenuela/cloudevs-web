import { Component, inject, OnInit } from '@angular/core';
import {EnfasisTag} from '../../shared/components/enfasis-tag/enfasis-tag';
import {AnimateOnScrollDirective} from '../../shared/directives/animate-on-scroll.directive';
import {SeoService} from '../../shared/services/seo.service';

@Component({
  selector: 'contact-section',
  imports: [
    EnfasisTag,
    AnimateOnScrollDirective,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.set({
      title: 'Contacto | Cloudevs',
      description: '¿Listo para transformar tu negocio? Contáctanos y comienza tu proyecto hoy. Respondemos en menos de 24 horas.',
      keywords: 'contacto Cloudevs, solicitar presupuesto software, desarrollo web Colombia',
      canonical: 'https://www.cloudevs.co/contact',
    });
  }
}
