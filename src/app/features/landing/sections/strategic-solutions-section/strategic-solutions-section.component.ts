import { Component, input } from '@angular/core';
import { SectionWithCards } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-strategic-solutions-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './strategic-solutions-section.component.html',
  styleUrl: './strategic-solutions-section.component.scss',
})
export class StrategicSolutionsSectionComponent {
  readonly section = input.required<SectionWithCards>();
}
