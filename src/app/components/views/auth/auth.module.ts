import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAuthModule } from './layout/layout-auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutAuthModule,
    FormsModule
  ],
  exports: [
  ]
})
export class AuthModule { }
