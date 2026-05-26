import { Component, ElementRef, ViewChild, computed, input } from '@angular/core';
import { BusinessProofContent } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

type CarouselKind = 'testimonials' | 'partners';

@Component({
  selector: 'app-business-proof-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './business-proof-section.component.html',
  styleUrl: './business-proof-section.component.scss',
})
export class BusinessProofSectionComponent {
  readonly section = input.required<BusinessProofContent>();
  readonly testimonialsLoop = computed(() => [...this.section().testimonials, ...this.section().testimonials]);
  readonly partnersLoop = computed(() => [...this.section().partners, ...this.section().partners]);

  @ViewChild('testimonialsTrack') private testimonialsTrack?: ElementRef<HTMLElement>;
  @ViewChild('partnersTrack') private partnersTrack?: ElementRef<HTMLElement>;

  private readonly carouselInteraction: Record<CarouselKind, { focus: boolean; hover: boolean }> = {
    testimonials: { focus: false, hover: false },
    partners: { focus: false, hover: false },
  };

  protected setCarouselHover(carousel: CarouselKind, isHovering: boolean): void {
    this.carouselInteraction[carousel].hover = isHovering;
    this.syncCarouselPlayback(carousel);
  }

  protected setCarouselFocus(event: FocusEvent, carousel: CarouselKind, isFocused: boolean): void {
    if (!isFocused && this.isFocusStillInside(event)) {
      return;
    }

    this.carouselInteraction[carousel].focus = isFocused;
    this.syncCarouselPlayback(carousel);
  }

  protected moveTestimonialsCarousel(direction: -1 | 1): void {
    this.moveCarousel('testimonials', direction);
  }

  protected movePartnersCarousel(direction: -1 | 1): void {
    this.moveCarousel('partners', direction);
  }

  private moveCarousel(carousel: CarouselKind, direction: -1 | 1): void {
    const track = this.getCarouselTrack(carousel);
    const itemCount =
      carousel === 'testimonials' ? this.section().testimonials.length : this.section().partners.length;

    if (!track || itemCount < 1) {
      return;
    }

    const animation = this.getMarqueeAnimation(track);

    if (!animation) {
      this.scrollCarousel(track, direction);
      return;
    }

    animation.pause();

    const duration = this.getAnimationDuration(animation, track);

    if (duration > 0) {
      const currentTime = this.getAnimationCurrentTime(animation);
      animation.currentTime = this.normalizeAnimationTime(
        currentTime + (duration / itemCount) * direction,
        duration,
      );
    }

    this.syncCarouselPlayback(carousel);
  }

  private syncCarouselPlayback(carousel: CarouselKind): void {
    const animation = this.getMarqueeAnimation(this.getCarouselTrack(carousel));

    if (!animation) {
      return;
    }

    if (this.isCarouselInteracting(carousel)) {
      animation.pause();
      return;
    }

    animation.play();
  }

  private isCarouselInteracting(carousel: CarouselKind): boolean {
    const interaction = this.carouselInteraction[carousel];
    return interaction.hover || interaction.focus;
  }

  private isFocusStillInside(event: FocusEvent): boolean {
    const currentTarget = event.currentTarget as HTMLElement | null;
    const relatedTarget = event.relatedTarget as Node | null;
    return !!currentTarget && !!relatedTarget && currentTarget.contains(relatedTarget);
  }

  private getCarouselTrack(carousel: CarouselKind): HTMLElement | undefined {
    return carousel === 'testimonials'
      ? this.testimonialsTrack?.nativeElement
      : this.partnersTrack?.nativeElement;
  }

  private getMarqueeAnimation(track?: HTMLElement): Animation | undefined {
    return track?.getAnimations().find((animation) => animation.playState !== 'idle');
  }

  private getAnimationDuration(animation: Animation, track: HTMLElement): number {
    const duration = animation.effect?.getTiming().duration;

    if (typeof duration === 'number' && Number.isFinite(duration)) {
      return duration;
    }

    return this.getCssAnimationDuration(track);
  }

  private getAnimationCurrentTime(animation: Animation): number {
    const currentTime = Number(animation.currentTime ?? 0);
    return Number.isFinite(currentTime) ? currentTime : 0;
  }

  private getCssAnimationDuration(track: HTMLElement): number {
    const duration = getComputedStyle(track).animationDuration.split(',')[0]?.trim() ?? '';

    if (duration.endsWith('ms')) {
      return Number.parseFloat(duration);
    }

    if (duration.endsWith('s')) {
      return Number.parseFloat(duration) * 1000;
    }

    return 0;
  }

  private normalizeAnimationTime(time: number, duration: number): number {
    return ((time % duration) + duration) % duration;
  }

  private scrollCarousel(track: HTMLElement, direction: -1 | 1): void {
    const viewport = track.parentElement;
    const firstItem = track.firstElementChild as HTMLElement | null;

    if (!viewport) {
      return;
    }

    const firstItemStyles = firstItem ? getComputedStyle(firstItem) : null;
    const itemWidth = firstItem?.getBoundingClientRect().width ?? viewport.clientWidth * 0.72;
    const itemGap = Number.parseFloat(firstItemStyles?.marginRight ?? '0') || 0;

    viewport.scrollBy({
      behavior: 'smooth',
      left: (itemWidth + itemGap) * direction,
    });
  }
}
