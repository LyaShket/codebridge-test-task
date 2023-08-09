import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighterPipe } from './pipes/highlighter.pipe';



@NgModule({
  declarations: [
    HighlighterPipe
  ],
  exports: [
    HighlighterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
