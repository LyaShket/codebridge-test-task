import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoadingComponent } from './app-loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppLoadingComponent
  ],
  exports: [
    AppLoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class AppLoadingModule { }
