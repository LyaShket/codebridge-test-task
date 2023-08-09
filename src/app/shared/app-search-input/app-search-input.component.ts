import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './app-search-input.component.html',
})
export class AppSearchInputComponent {
  @Input() formGroup!: FormGroup;
  @Input() placeholder!: string;
  @Output() onChange: EventEmitter<void> = new EventEmitter<void>();
}
