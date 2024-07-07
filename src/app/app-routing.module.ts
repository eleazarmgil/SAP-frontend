import { NgModule } from '@angular/core';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { BaseComponent } from './components/layout/base/base.component';
import { ErrorPageComponent } from './components/views/error-page/error-page.component';
import { MainPageComponent } from './components/views/landing-page/main-page/main-page.component';
import { AboutComponent } from './components/views/landing-page/about/about.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutComponent},
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
