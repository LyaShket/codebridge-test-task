import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppArticlePreviewCardComponent } from './app-article-preview-card.component';
import { MatCardModule } from '@angular/material/card';
import { AppLinkArrowModule } from '../app-link-arrow/app-link-arrow.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppArticlePreviewCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppLinkArrowModule,
    MatIconModule
  ],
  exports: [
    AppArticlePreviewCardComponent
  ]
})
export class AppArticlePreviewCardModule { }
