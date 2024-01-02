import { Component, Input } from '@angular/core';
import { NewsData, NewsResult } from 'src/app/models/NewsData';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html'
})
export class NewsCardsComponent {
    @Input() newsData: NewsResult = {
        article_id: '',
        content: '',
        creator: [],
        image_url: '',
        link: '',
        pubDate: '',
        title: ''
    };
}
