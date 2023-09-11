import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private articlesService: ArticlesService) { }

  articles: Article[] = [];

  ngOnInit(): void {
    this.articles = this.articlesService.getLatestArticles();
  }

}
