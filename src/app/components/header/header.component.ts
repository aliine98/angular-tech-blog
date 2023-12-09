import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  headerStyle: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    window.scrollY > 10 ? this.headerStyle = 'bg-neutral-950/70' : this.headerStyle = 'bg-transparent';
  }
}
