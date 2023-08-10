import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { AppArticleViewModule } from '../../shared/app-article-view/app-article-view.module';
import { AppLinkArrowModule } from '../../shared/app-link-arrow/app-link-arrow.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    AppArticleViewModule,
    AppLinkArrowModule,
    MatCardModule,
  ]
})
export class ArticleModule { }
