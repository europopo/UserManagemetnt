import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
