import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];

  ngOnInit(): void {
    this.generateRandomArticles();
  }

  private generateRandomArticles(): void {
    for (let i = 1; i <= 5; i++) {
      const article: Article = {
        id: i,
        title: `Article ${i}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: `https://placekitten.com/150/150?image=${i}`, // Replace with your actual image URL
      };

      this.articles.push(article);
    }
  }
}

export interface Article {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
