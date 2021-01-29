import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from "./core/services/auth/auth-guard.service";
import {AuthCallbackComponent} from "./features/auth-callback/auth-callback.component";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
}, {
  path: 'admin',
  loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
  canActivate: [AuthGuardService]
}, {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}, {
  path: 'auth-callback', component: AuthCallbackComponent
}, {
    path: '**',
    loadChildren: () => import('./features/not-fount/not-fount.module').then(m => m.NotFountModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
