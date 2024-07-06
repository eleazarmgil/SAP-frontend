import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/layout/base/base.component';
import { ErrorPageComponent } from './components/views/error-page/error-page.component';

const routes: Routes = [
  //{ path: '', loadChildren: () => import('src/app/views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'app',
    component: BaseComponent,
    children: [
      // {
      //   path: 'profile',
      //   loadChildren: () => import('./views/pages/profile/profile.module').then(m => m.ProfileModule)
      // },
      // {
      //   path: 'explore',
      //   loadChildren: () => import('src/app/views/pages/explore/explore.module').then(m => m.ExploreModule)
      // },
      // {
      //   path: 'email',
      //   loadChildren: () => import('src/app/views/pages/email/email.module').then(m => m.EmailModule)
      // },
      // {
      //   path: 'products',
      //   loadChildren: () => import('src/app/views/pages/products/products.module').then(m => m.ProductsModule)
      // },
      // {
      //   path: 'purchases',
      //   loadChildren: () => import('src/app/views/pages/purchases/purchases.module').then(m => m.PurchasesModule)
      // }
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
