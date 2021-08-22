import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { NgZorroAntdModule } from "../ng-zorro-antd.module";
import { NgDevuiModule } from "../ng-devui.module";


import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from "./main.component";
import { UsersComponent } from './learning/usermangement/users/users.component';
import { UserDetailComponent } from './learning/usermangement/user-detail/user-detail.component';
import { MessagesComponent } from './learning/usermangement/messages/messages.component';
import { DashboardComponent } from './learning/usermangement/dashboard/dashboard.component';
import { UserSearchComponent } from './learning/usermangement/user-search/user-search.component';
import { ContentComponent } from './learning/usermangement/content/content.component';
import { LearningComponent } from './learning/learning.component';
import { FatherComponent } from './learning/father/father/father.component';
import { ChildrenComponent } from './learning/father/children/children.component';
import { HighlightDirective } from '../directive/highlight.directive';
import { DirectComponent } from './learning/direct/direct.component';
import { StructureComponent } from './learning/structure/structure.component';
import { UnlessDirective } from '../directive/unless.directive';
import { PipestudyComponent } from './learning/pipestudy/pipestudy.component';
import { CanflyingPipe } from '../pipe/canflying.pipe';
import { CanflyingPurePipe } from '../pipe/canflying-pure.pipe';
import { HookComponent } from './learning/hook/hook.component';
import { LifecycleComponent } from './learning/hook/lifecycle/lifecycle.component';
import { SpyComponent } from './learning/hook/spy/spy.component';
import { SpyDirective } from '../directive/spy.directive';
import { OnchangesComponent, OnChangesParentComponent } from './learning/hook/onchanges/onchanges.component';
import { DynamicComponent } from './learning/dynamic/dynamic/dynamic.component';
import { AdDirective } from './learning/dynamic/ad.directive';
import { AdBannerComponent } from './learning/dynamic/ad-banner.component';
import { HeroJobAdComponent } from './learning/dynamic/hero-job-ad.component';
import { HeroProfileComponent } from './learning/dynamic/hero-profile.component';
import { MusicComponent } from './learning/music/music.component';
import { ShowtableComponent } from './learning/table/showtable/showtable.component';
import { AnimationsComponent } from './learning/animations/animations.component';
import { DynamicFormComponent } from './learning/dynamic-form/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './learning/dynamic-form/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    UserDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UserSearchComponent,
    ContentComponent,
    LearningComponent,
    FatherComponent,
    ChildrenComponent,
    HighlightDirective,
    DirectComponent,
    StructureComponent,
    UnlessDirective,
    PipestudyComponent,
    CanflyingPipe,
    CanflyingPurePipe,
    HookComponent,
    LifecycleComponent,
    SpyComponent,
    SpyDirective,
    OnchangesComponent,
    OnChangesParentComponent,
    DynamicComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    MusicComponent,
    ShowtableComponent,
    AnimationsComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgDevuiModule
  ]
})
export class MainModule { }
