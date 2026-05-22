import { Component, input } from '@angular/core';
import { BusinessProofContent } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-business-proof-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './business-proof-section.component.html',
  styleUrl: './business-proof-section.component.scss',
})
export class BusinessProofSectionComponent {
  readonly section = input.required<BusinessProofContent>();
}
