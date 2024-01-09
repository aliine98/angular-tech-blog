import { Component, Input } from '@angular/core';
import { NewsData } from 'src/app/models/NewsData';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html'
})
export class NewsCardsComponent {
    @Input() newsData: NewsData = {
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
