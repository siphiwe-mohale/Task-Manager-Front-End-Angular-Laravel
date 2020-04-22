import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'task',
    component:TaskManagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'task/:id',
    component:TaskDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component:LoginComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
