import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsData, NewsList } from '../models/NewsData';
// import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getNewsList(): Observable<NewsList> {
    return this.http.get<NewsList>(`https://dev.to/api/articles`);
    // return this.http.get<NewsData>(`https://newsdata.io/api/1/news?apikey=${environment.NEWS_API_KEY}&category=technology&language=en`);
    //this.http.get<NewsData>(`https://newsapi.org/v2/top-headlines?apiKey=${environment.NEWS_API_KEY}&category=technology&country=us`).subscribe(res => console.log(res));
  }

  getNews(id: number): Observable<NewsData | undefined> {
    return this.getNewsList().pipe(
      map((newsList: NewsList) => newsList.find(news => news.id === id))
    );
  }
}
