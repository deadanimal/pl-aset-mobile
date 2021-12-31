import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'walkthrough',
    pathMatch: 'full'
  },
  { path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'auth/register',
  //   loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  // },
  // {
  //   path: 'auth/forgot',
  //   loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  // },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then( m => m.AuthLayoutPageModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./layouts/core-layout/core-layout.module').then( m => m.CoreLayoutPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./core/kewpa9/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./core/kewpa9/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./core/kewpa9/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./core/kewpa8/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./core/kewpa10a/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./core/kewpa10a/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./core/kewpa10a/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./core/kewpa10b/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./core/kewpa10b/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./core/kewpa10b/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./core/kewpa11/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./core/kewpa11/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./core/kewpa11/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./core/kewpa21/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./core/kewpa21/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./core/kewpa21/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'pengumuman',
    loadChildren: () => import('./core/pengumuman/pengumuman.module').then( m => m.PengumumanPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./core/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./core/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./core/profil/profil.module').then( m => m.ProfilPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
