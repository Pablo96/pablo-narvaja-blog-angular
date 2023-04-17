import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticlePreview } from '../shared/article.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  configUrl = 'localhost:8000/blogs/'

  constructor(private httpClient: HttpClient) { }

  getArticlesPreviews(): Observable<ArticlePreview[]> {
    return this.httpClient.get<ArticlePreview[]>(this.configUrl);
  }
}
