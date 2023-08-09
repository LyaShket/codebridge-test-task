import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetArticleList } from '../../state/app.actions';
import { AppState } from '../../state/app.state';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject, tap } from 'rxjs';
import { IArticle } from '../../core/interfaces/state/article.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(AppState.list) articleList$!: Observable<IArticle[]>;
  @Select(AppState.search) search$!: Observable<string>;

  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  searchSubject = new BehaviorSubject<string>('');

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((search: string) => {
      this.store.dispatch(new GetArticleList(search));
    });
  }

  submitSearchForm() {
    this.searchSubject.next(<string>this.searchForm.value.search);
  }
}
