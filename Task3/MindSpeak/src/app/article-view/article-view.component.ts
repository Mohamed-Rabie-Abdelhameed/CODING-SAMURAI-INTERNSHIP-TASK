import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}
  articleMd: string = '';
  id: number = 0;
  article!: Article | null;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.articleMd = this.articlesService.getArticleContent(this.id);
    this.article = this.articlesService.getArticle(this.id);
  }
  getDateTimeString(): string {
    if (this.article) {
      return this.article.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    } else {
      return '';
    }
  }
}
