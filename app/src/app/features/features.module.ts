import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, AuthModule, HomeModule, FormsModule, ReactiveFormsModule],
})
export class FeaturesModule { }
