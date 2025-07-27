import { Component, DOCUMENT, HostListener, Inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isScrolled = signal(false);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('document:scroll')
  onWindowScroll() {
    const scrollPosition = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    this.isScrolled.set(scrollPosition > 50);
  }

}
