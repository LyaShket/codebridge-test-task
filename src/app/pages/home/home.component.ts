import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetArticleList } from '../../state/app.actions';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { IArticle } from '../../core/interfaces/state/article.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(AppState.list) articleList$!: Observable<IArticle[]>;
  @Select(AppState.search) search$!: Observable<string>;

  protected readonly Date = Date;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetArticleList());
  }
}
