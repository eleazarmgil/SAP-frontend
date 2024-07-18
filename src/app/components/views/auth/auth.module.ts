import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutAuthModule } from './layout/layout-auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutAuthModule,
  ],
  exports: [
    LoginComponent, SignUpComponent, ResetPasswordComponent
  ]
})
export class AuthModule { }
