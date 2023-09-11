import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(private articleService: ArticlesService) {}

  articles: Article[] = [];

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }
}
