import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './main/learning/usermangement/users/users.component';
import { UserDetailComponent } from './main/learning/usermangement/user-detail/user-detail.component';
import { MessagesComponent } from './main/learning/usermangement/messages/messages.component';
import { DashboardComponent } from './main/learning/usermangement/dashboard/dashboard.component';
import { UserSearchComponent } from './main/learning/usermangement/user-search/user-search.component';
import { ContentComponent } from './main/learning/usermangement/content/content.component';
import { LearningComponent } from './main/learning/learning.component';
import { FatherComponent } from './main/learning/father/father/father.component';
import { ChildrenComponent } from './main/learning/father/children/children.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DirectComponent } from './main/learning/direct/direct.component';
import { StructureComponent } from './main/learning/structure/structure.component';
import { UnlessDirective } from './directive/unless.directive';
import { PipestudyComponent } from './main/learning/pipestudy/pipestudy.component';
import { CanflyingPipe } from './pipe/canflying.pipe';
import { CanflyingPurePipe } from './pipe/canflying-pure.pipe';
import { HookComponent } from './main/learning/hook/hook.component';
import { LifecycleComponent } from './main/learning/hook/lifecycle/lifecycle.component';
import { SpyComponent } from './main/learning/hook/spy/spy.component';
import { SpyDirective } from './directive/spy.directive';
import { OnchangesComponent, OnChangesParentComponent } from './main/learning/hook/onchanges/onchanges.component';
import { DynamicComponent } from './main/learning/dynamic/dynamic/dynamic.component';
import { AdDirective } from './main/learning/dynamic/ad.directive';
import { AdBannerComponent } from './main/learning/dynamic/ad-banner.component';
import { HeroJobAdComponent } from './main/learning/dynamic/hero-job-ad.component';
import { HeroProfileComponent } from './main/learning/dynamic/hero-profile.component';
import { MusicComponent } from './main/learning/music/music.component';
import { ShowtableComponent } from './main/learning/table/showtable/showtable.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from "./ng-zorro-antd.module";
import { NgDevuiModule } from "./ng-devui.module";
import { MainComponent } from './main/main.component';



import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
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
    LoginComponent,
    MainComponent,
  ],
  imports: [
    NgZorroAntdModule,
    NgDevuiModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
