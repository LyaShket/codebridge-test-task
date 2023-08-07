import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { AppArticleViewModule } from '../../shared/app-article-view/app-article-view.module';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    AppArticleViewModule,
  ]
})
export class ArticleModule { }
