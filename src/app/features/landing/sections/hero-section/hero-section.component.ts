import { Component, input } from '@angular/core';
import { HeroContent } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly hero = input.required<HeroContent>();
}
