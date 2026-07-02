import { afterNextRender, DestroyRef, Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective {
  @Input() animateOnScroll: string = 'fade-up';
  @Input() animateDelay: number = 0;

  private el = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const el = this.el.nativeElement as HTMLElement;
      el.classList.add('anim-hidden', this.animateOnScroll);
      if (this.animateDelay > 0) {
        el.style.transitionDelay = `${this.animateDelay}ms`;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('anim-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}