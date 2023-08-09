import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-arrow',
  templateUrl: './app-link-arrow.component.html',
})
export class AppLinkArrowComponent {
  @Input() arrow!: 'left' | 'right';
}
