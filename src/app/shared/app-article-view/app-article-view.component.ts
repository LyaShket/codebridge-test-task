import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-view',
  templateUrl: './app-article-view.component.html',
  styleUrls: ['./app-article-view.component.scss'],
})
export class AppArticleViewComponent {
  @Input() title!: string;
  @Input() text!: string;
}
