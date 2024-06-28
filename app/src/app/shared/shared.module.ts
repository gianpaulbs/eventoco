import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';
import { MainButtonComponent } from './components/buttons/main-button/main-button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import { ParameterSubjectService } from './services/parameter-subject.service';

@NgModule({
  declarations: [ToggleButtonComponent, MainButtonComponent, InputFieldComponent],
  imports: [CommonModule, FormsModule],
  providers: [ParameterSubjectService],
  exports: [ToggleButtonComponent, MainButtonComponent, InputFieldComponent],
})
export class SharedModule { }
