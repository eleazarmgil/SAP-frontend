import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LandingBaseComponent } from './base/landing-base.component';
import { LandingNavbarComponent } from './navbar/landing-navbar.component';
import { LandingFooterComponent } from './footer/landing-footer.component';

@NgModule({
  declarations: [LandingBaseComponent, LandingNavbarComponent, LandingFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LandingBaseComponent,
    LandingNavbarComponent,
    LandingFooterComponent
  ]
})
export class LandingLayoutModule { }
