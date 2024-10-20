import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from 'node_modules/@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout/layout.module';
import { LandingPageModule } from './components/views/landing-page/landing-page.module';
import { LayoutAuthModule } from './components/views/auth/layout/layout-auth.module';
import { LandingLayoutModule } from './components/views/landing-page/layout/landing-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './components/views/auth/auth.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LayoutAdminModule } from './components/views/app/admin/layout/admin-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    LandingPageModule,
    LandingLayoutModule,
    LayoutModule,
    LayoutAuthModule,
    LayoutAdminModule,
    AuthModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
