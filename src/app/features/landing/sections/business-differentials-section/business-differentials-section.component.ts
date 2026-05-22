import { Component, input } from '@angular/core';
import { SectionWithCards } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-business-differentials-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './business-differentials-section.component.html',
  styleUrl: './business-differentials-section.component.scss',
})
export class BusinessDifferentialsSectionComponent {
  readonly section = input.required<SectionWithCards>();
}
