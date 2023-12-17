import { Component } from '@angular/core';
import { NewsData, NewsResult } from 'src/app/models/NewsData';
import { NewsService } from 'src/app/services/news.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
})
export class NewsComponent {
    newsData: NewsData = {results: []};

    constructor(private newsService: NewsService) {
        this.getNews();
    }

    getNews() {
        this.newsService.getNews().subscribe({
            next: (res: NewsData) => {
                this.newsData.results = res.results;
            }
        });
    }
}
