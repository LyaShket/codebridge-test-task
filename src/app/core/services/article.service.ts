import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../interfaces/api.interface';
import { IArticle } from '../interfaces/state/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  get(id: string): Observable<IArticle> {
    return this.http.get<IArticle>('https://api.spaceflightnewsapi.net/v4/articles/' + id);
  }

  search(search: string): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>('https://api.spaceflightnewsapi.net/v4/articles?search=' + search);
  }
}
