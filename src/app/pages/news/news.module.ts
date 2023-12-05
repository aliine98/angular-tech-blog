import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NewsComponent } from './news/news.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [HeroComponent, NewsComponent],
    exports: [NewsComponent],
    imports: [CommonModule, MatIconModule],
})
export class NewsModule {}
