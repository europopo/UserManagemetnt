import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from './main/learning/usermangement/users/users.component';
import { UserDetailComponent } from './main/learning/usermangement/user-detail/user-detail.component';
import { DashboardComponent } from './main/learning/usermangement/dashboard/dashboard.component';
import { ContentComponent } from './main/learning/usermangement/content/content.component';
import { LearningComponent } from './main/learning/learning.component';
import { FatherComponent } from './main/learning/father/father/father.component';
import { DirectComponent } from './main/learning/direct/direct.component';
import { StructureComponent } from './main/learning/structure/structure.component';
import { PipestudyComponent } from './main/learning/pipestudy/pipestudy.component';
import { HookComponent } from './main/learning/hook/hook.component';
import { LifecycleComponent } from './main/learning/hook/lifecycle/lifecycle.component';
import { SpyComponent } from './main/learning/hook/spy/spy.component';
import { OnchangesComponent, OnChangesParentComponent } from './main/learning/hook/onchanges/onchanges.component';
import { DynamicComponent } from './main/learning/dynamic/dynamic/dynamic.component';
import { MusicComponent } from './main/learning/music/music.component';
import { ShowtableComponent } from './main/learning/table/showtable/showtable.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 空地址重定向到dashboard頁面
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent, children: [
    { path: 'content', component: ContentComponent,  children: [
      { path: 'user', component: UsersComponent },
      { path: 'dashboard', component: DashboardComponent, children: []},
      { path: 'detail/:id', component: UserDetailComponent},
    ]},
    { path: 'learning', component: LearningComponent,},
    { path: 'father', component: FatherComponent},
    { path: 'direct', component: DirectComponent},
    { path: 'structure', component: StructureComponent},
    { path: 'pipestudy', component: PipestudyComponent},
    { path: 'dynamic', component: DynamicComponent},
    { path: 'hook', component: HookComponent, children: [
      { path: 'lifecycle', component: LifecycleComponent},
      { path: 'spy', component: SpyComponent},
      { path: 'onchangesparent', component: OnChangesParentComponent, children: [
        { path: 'onchanges', component: OnchangesComponent},
      ]},
    ]},
    { path: 'music', component: MusicComponent},
    { path: 'table', component: ShowtableComponent},
  ]},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
