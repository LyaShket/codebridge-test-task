import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(text: string, searchText: string | null): string {
    if (!searchText) return text;

    const re = new RegExp("\\b("+searchText+"\\b)", 'igm');
    text = text.replace(re, '<span class="highlighted-text">$&</span>');
    console.log(text);
    return text;
  }

}
