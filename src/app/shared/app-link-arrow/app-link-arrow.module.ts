import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLinkArrowComponent } from './app-link-arrow.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppLinkArrowComponent
  ],
  exports: [
    AppLinkArrowComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class AppLinkArrowModule { }
