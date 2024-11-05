import { NgModule } from '@angular/core';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { ErrorPageComponent } from './components/views/error/error-page.component';
import { LandingBaseComponent } from './components/views/landing-page/layout/base/landing-base.component';
import { MainPageComponent } from './components/views/landing-page/main-page/main-page.component';
import { AboutComponent } from './components/views/landing-page/about/about.component';
import { BaseAuthComponent } from './components/views/auth/layout/base-auth/base-auth.component';
import { LoginComponent } from './components/views/auth/login/login.component';
import { SignUpComponent } from './components/views/auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './components/views/auth/reset-password/reset-password.component';
import { NewPsychologistComponent } from './components/views/auth/new-psychologist/new-psychologist.component';
import { AdminBaseComponent } from './components/views/app/admin/layout/base/base.component';
import { AdminProfileComponent } from './components/views/app/admin/profile/profile.component';
import { ReadUserComponent } from './components/views/app/admin/users/read-user/read-user.component';
import { UpdateUserComponent } from './components/views/app/admin/users/update-user/update-user.component';
import { AdminResetPasswordComponent } from './components/views/app/admin/profile/reset-password/reset-password.component';
import { AdminUpdateEmailComponent } from './components/views/app/admin/profile/update-email/update-email.component';
import { AdminUpdateCredentialsComponent } from './components/views/app/admin/profile/update-credentials/update-credentials.component';
import { AdminUpdateUsernameComponent } from './components/views/app/admin/profile/update-username/update-username.component';
import { ContentComponent } from './components/views/app/admin/content/content.component';
import { ReadContentComponent } from './components/views/app/admin/content/read-content/read-content.component';
import { AddContentComponent } from './components/views/app/admin/content/add-content/add-content.component';

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
        path:'',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      }
    ]
  },
  {
    path:'auth/signup/psychologist',
    component:NewPsychologistComponent
  },
  {
    path:'admin',
    component:AdminBaseComponent,
    children:[
      {
        path:'profile',
        component:AdminProfileComponent,
        children:[
          {
            path:'update-password',
            component: AdminResetPasswordComponent
          },
          {
            path:'update-email',
            component: AdminUpdateEmailComponent
          },
          {
            path:'update-credentials',
            component: AdminUpdateCredentialsComponent
          },
          {
            path:'update-username',
            component: AdminUpdateUsernameComponent
          }
        ]
      },
      {
        path:'content',
        component: ContentComponent,
        children:[
          {
            path:'view',
            component: ReadContentComponent
          },
          {
            path:'new',
            component:AddContentComponent
          }
        ]
      },
      {
        path:'users',
        component: ReadUserComponent
      },
      {
        path:'users/:id',
        component: UpdateUserComponent
      },
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
