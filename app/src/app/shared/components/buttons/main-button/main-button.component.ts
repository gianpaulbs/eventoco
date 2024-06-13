import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css',
})
export class MainButtonComponent {
  @Input() label: string | undefined;
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() secondaryColor: boolean = false;

  get appliedStyles() {
    return {
      [this.size]: true,
      secondary: this.secondaryColor,
    };
  }
}
