import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/auth.guard";


import { MainComponent } from "./main.component";
import { UsersComponent } from './learning/usermangement/users/users.component';
import { UserDetailComponent } from './learning/usermangement/user-detail/user-detail.component';
import { DashboardComponent } from './learning/usermangement/dashboard/dashboard.component';
import { ContentComponent } from './learning/usermangement/content/content.component';
import { LearningComponent } from './learning/learning.component';
import { FatherComponent } from './learning/father/father/father.component';
import { DirectComponent } from './learning/direct/direct.component';
import { StructureComponent } from './learning/structure/structure.component';
import { PipestudyComponent } from './learning/pipestudy/pipestudy.component';
import { HookComponent } from './learning/hook/hook.component';
import { LifecycleComponent } from './learning/hook/lifecycle/lifecycle.component';
import { SpyComponent } from './learning/hook/spy/spy.component';
import { OnchangesComponent, OnChangesParentComponent } from './learning/hook/onchanges/onchanges.component';
import { DynamicComponent } from './learning/dynamic/dynamic/dynamic.component';
import { MusicComponent } from './learning/music/music.component';
import { ShowtableComponent } from './learning/table/showtable/showtable.component';
import { AnimationsComponent } from './learning/animations/animations.component';
import { DynamicFormComponent } from './learning/dynamic-form/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
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
    { path: 'animation', component: AnimationsComponent},
    { path: 'dynamicform', component: DynamicFormComponent},
  ]}
];

@NgModule({
  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
