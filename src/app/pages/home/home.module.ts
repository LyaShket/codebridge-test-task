import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AppSearchInputModule } from '../../shared/app-search-input/app-search-input.module';
import { AppArticlePreviewCardModule } from '../../shared/app-article-preview-card/app-article-preview-card.module';
import { CoreModule } from '../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLoadingModule } from '../../shared/app-loading/app-loading.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSearchInputModule,
    AppArticlePreviewCardModule,
    CoreModule,
    ReactiveFormsModule,
    AppLoadingModule,
  ]
})
export class HomeModule { }
