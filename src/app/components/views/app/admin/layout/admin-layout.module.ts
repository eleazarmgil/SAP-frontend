import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminBaseComponent } from './base/base.component';
import { AdminSidebarComponent } from './sidebar/sidebar.component';
import { AdminFooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AdminBaseComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AdminBaseComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  providers: []
})
export class LayoutAdminModule { }
