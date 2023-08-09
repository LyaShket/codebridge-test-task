import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-view',
  templateUrl: './app-article-view.component.html',
})
export class AppArticleViewComponent {
  @Input() title!: string;
  @Input() text!: string;
}
