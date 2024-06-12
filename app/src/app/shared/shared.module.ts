import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';

@NgModule({
  declarations: [ToggleButtonComponent],
  imports: [CommonModule],
  exports: [ToggleButtonComponent],
})
export class SharedModule {}
