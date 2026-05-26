import { Component, HostListener, input, signal } from '@angular/core';
import { HeaderContent } from '../../models/site-content.model';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  readonly header = input.required<HeaderContent>();

  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  protected updateHeaderState(): void {
    this.isScrolled.set(window.scrollY > 16);
  }

  @HostListener('document:keydown.escape')
  protected closeMenuOnEscape(): void {
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
