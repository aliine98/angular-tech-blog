import { Component, Input } from '@angular/core';
import { NewsData } from 'src/app/models/NewsData';

@Component({
  selector: 'app-news-highlight',
  templateUrl: './news-highlight.component.html'
})
export class NewsHighlightComponent {
  @Input() highlightedNews: NewsData = {
      id: 0,
      title: '',
      description: '',
      cover_image: '',
      tag_list: [],
      url: '',
      user: {name:'',profile_image_90:''},
      readable_publish_date: '',
    };
}
