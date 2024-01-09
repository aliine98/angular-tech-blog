import { Component, OnInit } from '@angular/core';
import { NewsList } from 'src/app/models/NewsData';
import { NewsService } from 'src/app/services/news.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
    newsList: NewsList = [];

    constructor(private newsService: NewsService) {
    }

    ngOnInit(): void {
        this.getNews();
    }

    getNews() {
        this.newsService.getNewsList().subscribe({
            next: (res: NewsList) => {
                this.newsList = res;
            }
        });
    }
}
