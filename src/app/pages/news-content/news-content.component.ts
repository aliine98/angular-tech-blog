import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsData } from 'src/app/models/NewsData';
import { NewsService } from 'src/app/services/news.service';

@Component({
    selector: 'app-news-content',
    templateUrl: './news-content.component.html'
})
export class NewsContentComponent implements OnInit {
    newsData: NewsData | undefined;

    constructor(private newsService: NewsService, private route: ActivatedRoute){}

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        this.newsService.getNews(id).subscribe({
            next: res => this.newsData = res
        });
    }
}
