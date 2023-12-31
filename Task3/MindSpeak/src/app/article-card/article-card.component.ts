import { Component, Input } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  @Input() article!: Article;
  getDateString(): string{
    return this.article.date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
  }
}
