import { NgModule } from '@angular/core';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { ErrorPageComponent } from './components/views/error/error-page.component';
import { LandingBaseComponent } from './components/views/landing-page/layout/base/landing-base.component';
import { MainPageComponent } from './components/views/landing-page/main-page/main-page.component';
import { AboutComponent } from './components/views/landing-page/about/about.component';
import { BaseAuthComponent } from './components/views/auth/layout/base-auth/base-auth.component';
import { LoginComponent } from './components/views/auth/login/login.component';
import { SignUpComponent } from './components/views/auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: LandingBaseComponent,
    children: [
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path:'auth',
    component: BaseAuthComponent,
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
