import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { ContentComponent } from "./content/content.component";
import { LearningComponent } from './learning/learning.component';


const routes: Routes = [
  { path: '', redirectTo: '/learning', pathMatch: 'full' }, // 空地址重定向到dashboard頁面
  { path: '', component: LearningComponent},
  { path: 'content', component: ContentComponent,  children: [
    { path: 'user', component: UsersComponent },
    { path: 'dashboard', component: DashboardComponent, children: []},
    { path: 'detail/:id', component: UserDetailComponent},
  ]},
  { path: 'learning', component: LearningComponent,}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
