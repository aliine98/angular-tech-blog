import { Injectable } from '@angular/core';
import { NewsList } from '../models/NewsData';
import { Observable, map } from 'rxjs';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private newsService: NewsService) { }

  getSearchedArticle(search:string): Observable<NewsList> {
    return this.newsService.getNewsList().pipe(
      map((newsList: NewsList) => newsList.filter(article => article.title.toLowerCase().includes(search.toLowerCase())))
    );
  }
}
