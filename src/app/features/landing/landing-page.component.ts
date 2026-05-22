import { AfterViewInit, Component, HostListener } from '@angular/core';
import { SiteFooterComponent } from '../../core/layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../core/layout/site-header/site-header.component';
import { siteContentPt } from '../../core/data/site-content.pt';
import { BusinessDifferentialsSectionComponent } from './sections/business-differentials-section/business-differentials-section.component';
import { BusinessProofSectionComponent } from './sections/business-proof-section/business-proof-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ImplementationMethodSectionComponent } from './sections/implementation-method-section/implementation-method-section.component';
import { OperationProblemsSectionComponent } from './sections/operation-problems-section/operation-problems-section.component';
import { StrategicSolutionsSectionComponent } from './sections/strategic-solutions-section/strategic-solutions-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    OperationProblemsSectionComponent,
    StrategicSolutionsSectionComponent,
    ImplementationMethodSectionComponent,
    BusinessDifferentialsSectionComponent,
    BusinessProofSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit {
  protected readonly content = siteContentPt;

  ngAfterViewInit(): void {
    this.scrollToCurrentFragment();
  }

  @HostListener('window:hashchange')
  protected scrollToCurrentFragment(): void {
    window.setTimeout(() => {
      const fragment = window.location.hash.slice(1);

      if (!fragment) {
        return;
      }

      document.getElementById(decodeURIComponent(fragment))?.scrollIntoView({ block: 'start' });
    });
  }
}
