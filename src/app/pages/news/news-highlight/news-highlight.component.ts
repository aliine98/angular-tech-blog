import { Component, Input } from '@angular/core';
import { NewsResult } from 'src/app/models/NewsData';

@Component({
  selector: 'app-news-highlight',
  templateUrl: './news-highlight.component.html'
})
export class NewsHighlightComponent {
  @Input() highlightedNews: NewsResult = {
    article_id:'',
    content:'',
    creator:[''],
    image_url:'',
    link:'',
    pubDate:'',
    title:''
  };
}
