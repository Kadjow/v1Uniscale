import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'reveal-on-scroll');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.renderer.addClass(this.elementRef.nativeElement, 'is-visible');
        this.observer?.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 },
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
