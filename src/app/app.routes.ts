
import { HomeComp } from './Features/home/home.comp';
import { Routes } from '@angular/router';
import { AuthLayoutComp } from './Core/Layouts/auth-layout/auth-layout.comp';
import { BlankLayoutComp } from './Core/Layouts/blank-layout/blank-layout.comp';
import { LoginComp } from './Core/Auth/Login/login.comp';
import { RegisterComp } from './Core/Auth/Register/register.comp';
import { NotFoundComp } from './Features/not-found/not-found.comp';
import { authGuard } from './Core/Guards/auth/auth-guard';
import { noAuthGuard } from './Core/Guards/noAuth/no-auth-guard';
import { PostDetailsComp } from './Features/post-details/post-details.comp';
import { ProfileComp } from './Shared/Components/profile/profile.comp';
import { NotificationsComp } from './Shared/Components/notifications/notifications.comp';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '', component: AuthLayoutComp, canActivate: [noAuthGuard], children: [
      { path: 'login', component: LoginComp },
      { path: 'register', component: RegisterComp },
    ]
  },

  {
    path: '', component: BlankLayoutComp, canActivate: [authGuard], children: [
      { path: 'home', component: HomeComp },
      { path: 'profile', component: ProfileComp },
      { path: 'notifications', component: NotificationsComp },
      { path: 'post-details/:id', component: PostDetailsComp },
    ]
  },

  { path: '**', component: NotFoundComp },
];