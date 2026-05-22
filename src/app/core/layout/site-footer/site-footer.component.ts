import { Component, input } from '@angular/core';
import { FooterContent } from '../../models/site-content.model';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly footer = input.required<FooterContent>();
}
