import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsList } from 'src/app/models/NewsData';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searched-articles',
  templateUrl: './searched-articles.component.html'
})
export class SearchedArticlesComponent implements OnInit, AfterContentChecked {
    newsList: NewsList = [];
    query: string = '';
    constructor(private searchService: SearchService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.query = this.route.snapshot.queryParamMap.get('q') || '';
      console.log('onInit',this.newsList);
      this.getSearchedArticles(this.query);
    }

    ngAfterContentChecked(): void {
      //Called after every check of the component's or directive's content.
      //Add 'implements AfterContentChecked' to the class.
      const newQuery: string = this.route.snapshot.queryParamMap.get('q') || '';
      if(this.query === newQuery) return;
      this.query = newQuery;
      this.getSearchedArticles(this.query);
      console.log('after content check',this.newsList);
    }

    getSearchedArticles(query: string) {
      this.searchService.getSearchedArticle(query).subscribe({
        next: (res) => this.newsList = res
      });
    }
}
