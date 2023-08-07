import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppArticleViewComponent } from './app-article-view.component';



@NgModule({
  declarations: [
    AppArticleViewComponent
  ],
  exports: [
    AppArticleViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppArticleViewModule { }
