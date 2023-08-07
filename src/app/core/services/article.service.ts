import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor() { }

  get(id: string) {
    return of(null);
  }

  search(search: string) {
    return of([]);
  }
}
