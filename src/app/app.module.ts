import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsersComponent } from './demo2/users/users.component';
import { UserDetailComponent } from './demo2/user-detail/user-detail.component';
import { MessagesComponent } from './demo2/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './demo2/dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./service/in-memory-data.service";
import { UserSearchComponent } from './demo2/user-search/user-search.component';
import { ContentComponent } from './demo2/content/content.component';
import { LearningComponent } from './learning/learning.component';
import { FatherComponent } from './demo/father/father.component';
import { ChildrenComponent } from './demo/children/children.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DirectComponent } from './demo3/direct.component';
import { StructureComponent } from './demo4/structure/structure.component';
import { UnlessDirective } from './directive/unless.directive';
import { PipestudyComponent } from './demo5/pipestudy/pipestudy.component';
import { CanflyingPipe } from './pipe/canflying.pipe';
import { CanflyingPurePipe } from './pipe/canflying-pure.pipe';
import { HookComponent } from './demo6/hook.component';
import { LifecycleComponent } from './demo6/lifecycle/lifecycle.component';
import { SpyComponent } from './demo6/spy/spy.component';
import { SpyDirective } from './directive/spy.directive';
import { OnchangesComponent, OnChangesParentComponent } from './demo6/onchanges/onchanges.component';
import { DynamicComponent } from './demo7/dynamic/dynamic.component';
import { AdDirective } from './demo7/ad.directive';
import { AdBannerComponent } from './demo7/ad-banner.component';
import { HeroJobAdComponent } from './demo7/hero-job-ad.component';
import { HeroProfileComponent } from './demo7/hero-profile.component';
import { MusicComponent } from './music/music.component';
import { ShowtableComponent } from './demo8/showtable/showtable.component';

// DevUI
import { DevUIModule } from 'ng-devui';
import { SliderModule } from 'ng-devui/slider';

// ng-zorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconDefinition } from '@ant-design/icons-angular';
import { CaretRightOutline, PauseOutline } from '@ant-design/icons-angular/icons';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';


const icons: IconDefinition[] = [ CaretRightOutline, PauseOutline ];


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
  ],
  imports: [
    SliderModule,
    DevUIModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NzIconModule.forRoot(icons),
    NzButtonModule,
    NzTableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NzPopoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
