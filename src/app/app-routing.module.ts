import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';

const appRoutes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'task',
    component:TaskManagerComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'task/:id',
    component:TaskDetailComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'request-password-reset',
    component:RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'response-password-reset',
    component:ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
