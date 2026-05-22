import { Component, input } from '@angular/core';
import { MethodSectionContent } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-implementation-method-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './implementation-method-section.component.html',
  styleUrl: './implementation-method-section.component.scss',
})
export class ImplementationMethodSectionComponent {
  readonly section = input.required<MethodSectionContent>();
}
