import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
})
export class HeroComponent {
    liveDate: string = formatDate(new Date(),'fullDate','en');
}
