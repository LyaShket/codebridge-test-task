import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetArticle, GetArticleList, InitArticleList, ShowNotificationError } from './app.actions';
import { Injectable } from '@angular/core';
import { catchError, filter, of, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApp } from '../core/interfaces/state/app.interace';
import { ArticleService } from '../core/services/article.service';
import { Router } from '@angular/router';

export const getAppInitialState = (): IApp => ({
  list: [],
  listLoaded: false,
  article: null,
  articleLoaded: false,
  search: '',
});

@State<IApp>({
  name: 'app',
  defaults: getAppInitialState()
})
@Injectable()
export class AppState {
  constructor(
    private snackBar: MatSnackBar,
    private articleService: ArticleService,
    private router: Router,
  ) {
  }

  @Selector()
  static article(state: IApp) {
    return state.article;
  }

  @Selector()
  static articleLoaded(state: IApp) {
    return state.articleLoaded;
  }

  @Selector()
  static list(state: IApp) {
    return state.list;
  }

  @Selector()
  static listLoaded(state: IApp) {
    return state.listLoaded;
  }

  @Selector()
  static search(state: IApp) {
    return state.search;
  }

  @Action(GetArticle)
  getArticle(ctx: StateContext<IApp>, action: GetArticle) {
    ctx.patchState({
      article: null,
      articleLoaded: false,
    });

    return this.articleService.get(action.id).pipe(
      catchError((error) => {
        ctx.dispatch(new ShowNotificationError(error.error.detail));
        return of(null);
      }),
      tap((article) => {
        if (!article) {
          this.router.navigate(['/']);
        }
      }),
      filter((article) => !!article),
    ).subscribe((article) => {
      ctx.patchState({
        article: article,
        articleLoaded: true,
      });
    });
  }

  @Action(GetArticleList)
  getArticleList(ctx: StateContext<IApp>, action: GetArticleList) {
    ctx.patchState({
      list: [],
      listLoaded: false,
      search: action.search,
    });

    return this.articleService.search(action.search).pipe(
      catchError((error) => {
        ctx.dispatch(new ShowNotificationError(error.error.detail));
        return of({
          results: [],
        });
      })
    ).subscribe((res) => {
      ctx.patchState({
        list: res.results,
        listLoaded: true,
      });
    });
  }

  @Action(InitArticleList)
  initArticleList(ctx: StateContext<IApp>, action: InitArticleList) {
    if (ctx.getState().list.length || ctx.getState().search.length) {
      return;
    }

    return ctx.dispatch(new GetArticleList());
  }

  @Action(ShowNotificationError)
  showNotificationError(ctx: StateContext<IApp>, action: ShowNotificationError) {
    this.snackBar.open('⚠️ ' + action.message, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'left',
    });
  }
}
