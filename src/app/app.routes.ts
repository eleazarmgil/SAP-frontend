import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { NewPsychologistComponent } from './pages/auth/new-psychologist/new-psychologist.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResetPasswordComponent } from './pages/profile/reset-password/reset-password.component';
import { UpdateEmailComponent } from './pages/profile/update-email/update-email.component';
import { UpdateCredentialsComponent } from './pages/profile/update-credentials/update-credentials.component';
import { UpdateUsernameComponent } from './pages/profile/update-username/update-username.component';
import { ContentComponent } from './pages/content/content.component';
import { ReadContentComponent } from './pages/content/read-content/read-content.component';
import { UpdateContentComponent } from './pages/content/update-content/update-content.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthService } from '../core/services/auth/auth.service';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'auth',
    component:  AuthComponent,
    children:[
      {
        path:'',
        component: SignInComponent
      },
      {
        path: 'new-psychologist',
        component:  NewPsychologistComponent,
      }
    ]
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'profile',
        component:ProfileComponent,
        children:[
          {
            path:'update-password',
            component: ResetPasswordComponent
          },
          {
            path:'update-email',
            component: UpdateEmailComponent
          },
          {
            path:'update-credentials',
            component: UpdateCredentialsComponent
          },
          {
            path:'update-username',
            component: UpdateUsernameComponent
          }
        ]
      },
      {
        path:'content',
        component: ContentComponent,
        children:[
          {
            path:'read',
            component: ReadContentComponent
          },
          {
            path:'update',
            component: UpdateContentComponent
          }
        ]
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'error/:type',
    component: ErrorComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
