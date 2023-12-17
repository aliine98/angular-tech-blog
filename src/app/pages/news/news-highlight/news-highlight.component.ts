import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewsResult } from 'src/app/models/NewsData';

@Component({
  selector: 'app-news-highlight',
  templateUrl: './news-highlight.component.html'
})
export class NewsHighlightComponent implements OnChanges {
  @Input() highlightedNews: NewsResult = {
    article_id:'',
    content:'',
    creator:[''],
    image_url:'',
    link:'',
    pubDate:'',
    title:''
  };

  constructor() {
    console.log(this.highlightedNews);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.highlightedNews);
  }
}
