import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent {
  @Input() label: string | undefined;
}
