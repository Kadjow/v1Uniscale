import { Component, input, signal } from '@angular/core';
import { ContactContent } from '../../../../core/models/site-content.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  readonly section = input.required<ContactContent>();

  protected readonly wasPreviewed = signal(false);

  protected previewSubmission(event: SubmitEvent): void {
    event.preventDefault();
    this.wasPreviewed.set(true);
    // Future integration point: WhatsApp, email, API endpoint or CRM can be connected here.
  }
}
