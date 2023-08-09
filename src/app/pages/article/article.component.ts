import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { IArticle } from '../../core/interfaces/state/article.interface';
import { GetArticle } from '../../state/app.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Select(AppState.article) article$!: Observable<IArticle>;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/']);
      return;
    }

    this.store.dispatch(new GetArticle(id));
  }
}
