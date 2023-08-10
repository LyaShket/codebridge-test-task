import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    if (value.length <= maxLength) {
      return value;
    }

    const truncatedText = value.substring(0, maxLength).trim();
    return truncatedText + '...';
  }
}
