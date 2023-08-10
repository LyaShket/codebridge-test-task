import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(text: string, searchText: string | null): string {
    if (!searchText) return text;

    searchText = searchText.trim();

    const re = new RegExp(`(${searchText.replace(/\s+/g, '|')})`, 'igm');
    text = text.replace(re, '<span class="highlighted-text">$&</span>');
    console.log(text);
    return text;
  }

}
