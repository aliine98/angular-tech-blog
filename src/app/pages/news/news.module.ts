import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NewsComponent } from './news/news.component';
import { MatIconModule } from '@angular/material/icon';
import { SocialsComponent } from './socials/socials.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsHighlightComponent } from './news-highlight/news-highlight.component';
import { NewsCardsComponent } from './news-cards/news-cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeroComponent, NewsComponent, SocialsComponent, NewsletterComponent, NewsHighlightComponent, NewsCardsComponent],
    exports: [NewsComponent],
    imports: [CommonModule, MatIconModule, RouterModule],
})
export class NewsModule {}
