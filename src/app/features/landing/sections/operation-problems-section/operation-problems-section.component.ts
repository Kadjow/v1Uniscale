import { Component, input } from '@angular/core';
import { SectionWithCards } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-operation-problems-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './operation-problems-section.component.html',
  styleUrl: './operation-problems-section.component.scss',
})
export class OperationProblemsSectionComponent {
  readonly section = input.required<SectionWithCards>();
}
