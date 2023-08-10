import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';



@NgModule({
  declarations: [
    HighlighterPipe,
    TruncateTextPipe
  ],
  exports: [
    HighlighterPipe,
    TruncateTextPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
