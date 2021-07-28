import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'otp/:status',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'form-one',
    loadChildren: () => import('./form-one/form-one.module').then( m => m.FormOnePageModule)
  },
  {
    path: 'form-two',
    loadChildren: () => import('./form-two/form-two.module').then( m => m.FormTwoPageModule)
  },
  {
    path: 'form-three',
    loadChildren: () => import('./form-three/form-three.module').then( m => m.FormThreePageModule)
  },
  {
    path: 'form-fourth',
    loadChildren: () => import('./form-fourth/form-fourth.module').then( m => m.FormFourthPageModule)
  },
  {
    path: 'form-five',
    loadChildren: () => import('./form-five/form-five.module').then( m => m.FormFivePageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'admin-create-user',
    loadChildren: () => import('./admin-create-user/admin-create-user.module').then( m => m.AdminCreateUserPageModule)
  },
  {
    path: 'admin-create-user/:id',
    loadChildren: () => import('./admin-create-user/admin-create-user.module').then( m => m.AdminCreateUserPageModule)
  },
  {
    path: 'admin-set-skills',
    loadChildren: () => import('./admin-set-skills/admin-set-skills.module').then( m => m.AdminSetSkillsPageModule)
  },
  {
    path: 'admin-user-reports',
    loadChildren: () => import('./admin-user-reports/admin-user-reports.module').then( m => m.AdminUserReportsPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
