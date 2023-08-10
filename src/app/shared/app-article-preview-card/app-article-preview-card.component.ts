import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-preview-card',
  templateUrl: './app-article-preview-card.component.html',
  styleUrls: ['./app-article-preview-card.component.scss']
})
export class AppArticlePreviewCardComponent {
  @Input() created!: number | string;
  @Input() title!: string;
  @Input() image!: string;
  @Input() text!: string;
}
