import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() label: string | undefined;
  @Input() type: string = 'text';
  @Input() value: string | number | undefined;
  inputId: string = `input-${Math.random().toString(36).substr(2, 9)}`;
}
