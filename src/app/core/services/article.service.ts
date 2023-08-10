import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../interfaces/api.interface';
import { IArticle } from '../interfaces/state/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  sortArticlesByMatch(search: string, articles: IArticle[]): IArticle[] {
    const keywords = search.toLowerCase().split(' ');

    return articles.sort((a: IArticle, b: IArticle) => {
      const titleAMatch = keywords.some(keyword => a.title.toLowerCase().includes(keyword));
      const titleBMatch = keywords.some(keyword => b.title.toLowerCase().includes(keyword));

      if (titleAMatch && titleBMatch) {
        return 0;
      }

      if (titleAMatch) {
        return -1;
      }

      return 1;
    });
  }

  get(id: string): Observable<IArticle> {
    return this.http.get<IArticle>('https://api.spaceflightnewsapi.net/v4/articles/' + id);
  }

  search(search: string): Observable<ISearchResponse> {
    return this.http
      .get<ISearchResponse>('https://api.spaceflightnewsapi.net/v4/articles?search=' + search)
      .pipe(map(res => {
        return {
          ...res,
          results: this.sortArticlesByMatch(search, res.results),
        }
      }));
  }
}
