import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSearchInputComponent } from './app-search-input.component';



@NgModule({
  declarations: [
    AppSearchInputComponent
  ],
  exports: [
    AppSearchInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppSearchInputModule { }
