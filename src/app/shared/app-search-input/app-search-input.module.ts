import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSearchInputComponent } from './app-search-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppSearchInputComponent
  ],
  exports: [
    AppSearchInputComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AppSearchInputModule { }
