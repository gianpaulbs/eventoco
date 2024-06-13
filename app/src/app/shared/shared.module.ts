import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';
import { MainButtonComponent } from './components/buttons/main-button/main-button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToggleButtonComponent, MainButtonComponent, InputFieldComponent],
  imports: [CommonModule, FormsModule],
  exports: [ToggleButtonComponent, MainButtonComponent, InputFieldComponent],
})
export class SharedModule {}
