import { Injectable } from '@angular/core';
import { Article } from '../models/article';
@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  articles: Article[] = [
    {
      id: 1,
      title: 'Getting Started with HTML',
      image: 'article1.svg',
      subtitle: 'Learn the basics of HTML for web development',
      date: new Date('2023-09-01'),
    },
    {
      id: 2,
      title: 'Mastering CSS Layouts',
      image: 'article2.svg',
      subtitle: 'Achieve pixel-perfect layouts with CSS',
      date: new Date('2023-09-03'),
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      image: 'article3.svg',
      subtitle: 'Learn the basics of JavaScript for web development',
      date: new Date('2023-09-05'),
    },
    {
      id: 4,
      title: 'Responsive Web Design with CSS',
      image: 'article4.svg',
      subtitle: 'Create websites that adapt to various devices',
      date: new Date('2023-09-10'),
    },
    {
      id: 5,
      title: 'Front-End Frameworks: Angular, React, and Vue',
      image: 'article5.svg',
      subtitle: 'A comparison of popular front-end frameworks',
      date: new Date('2023-09-15'),
    },
    {
      id: 6,
      title: 'Optimizing Web Performance',
      image: 'article6.svg',
      subtitle: "Boost your website's speed and efficiency",
      date: new Date('2023-09-20'),
    },
    {
      id: 7,
      title: 'The Importance of Accessibility in Web Development',
      image: 'article7.svg',
      subtitle: 'Making the web inclusive for everyone',
      date: new Date('2023-09-25'),
    },
    {
      id: 8,
      title: 'Building Progressive Web Apps (PWAs)',
      image: 'article8.svg',
      subtitle: 'Creating fast, reliable, and engaging web experiences',
      date: new Date('2023-09-30'),
    },
    {
      id: 9,
      title: 'Web Security Best Practices',
      image: 'article9.svg',
      subtitle: 'Protecting your web applications from threats',
      date: new Date('2023-10-05'),
    },
    {
      id: 10,
      title: 'Web Development Trends for 2024',
      image: 'article10.svg',
      subtitle: 'Stay ahead of the curve with the latest trends',
      date: new Date('2023-10-10'),
    },
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: number): Article | null {
    const article = this.articles.find((x) => x.id == id);
    if (article) {
      return article;
    } else {
      return null;
    }
  }

  getLatestArticles(): Article[] {
    return this.articles.slice(0, 3);
  }

  getArticleContent(id: number): string {
    return './assets/articles/article' + id + '.md';
  }
}
