import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';
import { MainButtonComponent } from './components/buttons/main-button/main-button.component';

@NgModule({
  declarations: [ToggleButtonComponent, MainButtonComponent],
  imports: [CommonModule],
  exports: [ToggleButtonComponent, MainButtonComponent],
})
export class SharedModule {}
