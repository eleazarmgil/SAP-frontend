import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResetPasswordComponent } from './pages/profile/reset-password/reset-password.component';
import { UpdateEmailComponent } from './pages/profile/update-email/update-email.component';
import { UpdateCredentialsComponent } from './pages/profile/update-credentials/update-credentials.component';
import { UpdateUsernameComponent } from './pages/profile/update-username/update-username.component';
import { ContentComponent } from './pages/content/content.component';
import { ReadContentComponent } from './pages/content/read-content/read-content.component';
import { UpdateContentComponent } from './pages/content/update-content/update-content.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthComponent } from './pages/auth/auth.component';
import { UserControlComponent } from './pages/user-control/user-control.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { ListUserComponent } from './pages/user-control/list-user/list-user.component';
import { ReadUserComponent } from './pages/user-control/read-user/read-user.component';
import { CreateUserComponent } from './pages/user-control/create-user/create-user.component';
import { UpdatePsychologistComponent } from './pages/user-control/update-psychologist/update-psychologist.component';
import { UpdateUserComponent } from './pages/user-control/update-user/update-user.component';
import { ListContentComponent } from './pages/content/list-content/list-content.component';
import { CreateContentComponent } from './pages/content/create-content/create-content.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'signup', component: SignUpComponent }
    ]
  },
  {
    path: 'app',
    component: AppHomeComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: '', component: UpdateEmailComponent},
          { path: 'update-password', component: ResetPasswordComponent },
          { path: 'update-email', component: UpdateEmailComponent },
          { path: 'update-credentials', component: UpdateCredentialsComponent },
          { path: 'update-username', component: UpdateUsernameComponent }
        ]
      },
      {
        path: 'content',
        component: ContentComponent,
        children: [
          { path: '', component: ListContentComponent },
          { path: 'new', component: CreateContentComponent },
          { path: ':id', component: ReadContentComponent },
          { path: ':id/up', component: UpdateContentComponent }
        ]
      },
      {
        path: 'users',
        component: UserControlComponent,
        children: [
          { path: '', component: ListUserComponent },
          { path: 'new', component: CreateUserComponent },
          { path: ':id', component: ReadUserComponent },
          { path: ':id/up-us', component: UpdateUserComponent },
          { path: ':id/up-ps', component: UpdatePsychologistComponent}
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
