import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './app-search-input.component.html',
})
export class AppSearchInputComponent {
  @Input() placeholder!: string;
}
