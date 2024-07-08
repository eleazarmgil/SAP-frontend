import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutModule } from './layout/landing-layout.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    MainPageComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    LandingLayoutModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MainPageComponent,
    AboutComponent
  ]
})
export class LandingPageModule { }
