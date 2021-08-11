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
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'bank-details',
    loadChildren: () => import('./bank-details/bank-details.module').then( m => m.BankDetailsPageModule)
  },
  {
    path: 'bank-details/:id',
    loadChildren: () => import('./bank-details/bank-details.module').then( m => m.BankDetailsPageModule)
  },
  {
    path: 'family-details',
    loadChildren: () => import('./family-details/family-details.module').then( m => m.FamilyDetailsPageModule)
  },
  {
    path: 'edit-skills',
    loadChildren: () => import('./edit-skills/edit-skills.module').then( m => m.EditSkillsPageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'show-bank-details',
    loadChildren: () => import('./show-bank-details/show-bank-details.module').then( m => m.ShowBankDetailsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'show-family-details',
    loadChildren: () => import("./show-familiy-details/show-familiy-details.module").then( m => m.ShowFamiliyDetailsPageModule)
  },
 
  {
    path: 'edit-family-details',
    loadChildren: () => import('./edit-family-details/edit-family-details.module').then( m => m.EditFamilyDetailsPageModule)
  },
  {
    path: 'edit-family-details/:id',
    loadChildren: () => import('./edit-family-details/edit-family-details.module').then( m => m.EditFamilyDetailsPageModule)
  },
  {
    path: 'user-page',
    loadChildren: () => import('./user-page/user-page.module').then( m => m.UserPagePageModule)
  },
  {
    path: 'our-work',
    loadChildren: () => import('./our-work/our-work.module').then( m => m.OurWorkPageModule)
  },
  {
    path: 'new-work',
    loadChildren: () => import('./new-work/new-work.module').then( m => m.NewWorkPageModule)
  },  {
    path: 'my-team',
    loadChildren: () => import('./my-team/my-team.module').then( m => m.MyTeamPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
