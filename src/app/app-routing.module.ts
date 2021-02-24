import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./demo2/users/users.component";
import { DashboardComponent } from "./demo2/dashboard/dashboard.component";
import { UserDetailComponent } from "./demo2/user-detail/user-detail.component";
import { ContentComponent } from "./demo2/content/content.component";
import { LearningComponent } from './learning/learning.component';
import { FatherComponent } from "./demo/father/father.component";
import { DirectComponent } from './demo3/direct.component';
import { StructureComponent } from './demo4/structure/structure.component';

const routes: Routes = [
  { path: '', redirectTo: '/learning', pathMatch: 'full' }, // 空地址重定向到dashboard頁面
  { path: '', component: LearningComponent},
  { path: 'content', component: ContentComponent,  children: [
    { path: 'user', component: UsersComponent },
    { path: 'dashboard', component: DashboardComponent, children: []},
    { path: 'detail/:id', component: UserDetailComponent},
  ]},
  { path: 'learning', component: LearningComponent,},
  { path: 'father', component: FatherComponent},
  { path: 'direct', component: DirectComponent},
  { path: 'structure', component: StructureComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
