import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppArticleViewComponent } from './app-article-view.component';
import { AppLinkArrowModule } from '../app-link-arrow/app-link-arrow.module';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppArticleViewComponent
  ],
  exports: [
    AppArticleViewComponent
  ],
  imports: [
    CommonModule,
    AppLinkArrowModule,
    RouterLink,
    MatCardModule
  ]
})
export class AppArticleViewModule { }
