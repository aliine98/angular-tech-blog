import { sanitizeIdentifier } from '@angular/compiler';
import { Component, HostListener, Sanitizer} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  headerStyle: string = '';
  query: string = '';

  constructor(private router: Router){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    window.scrollY > 10 ? this.headerStyle = 'bg-neutral-950/70' : this.headerStyle = 'bg-transparent';
  }

  searchArticle(query: string) {
    this.router.navigate(['/search'], { queryParams: { q: query }});
  }
}
