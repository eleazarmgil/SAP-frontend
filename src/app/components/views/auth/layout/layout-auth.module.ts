import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseAuthComponent } from './base-auth/base-auth.component';
import { SidebarAuthComponent } from './sidebar-auth/sidebar-auth.component';
import { FooterAuthComponent } from './footer-auth/footer-auth.component';

@NgModule({
  declarations: [BaseAuthComponent, FooterAuthComponent, SidebarAuthComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BaseAuthComponent,
    SidebarAuthComponent,
    FooterAuthComponent
  ]
})
export class LayoutAuthModule { }
