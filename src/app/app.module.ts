import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from "./ng-zorro-antd.module";
import { NgDevuiModule } from "./ng-devui.module";
import { WebSocketService } from './service/common/web-socket.service';
import { APP_INITIALIZER } from '@angular/core';

export function configureProvider(socket: WebSocketService) {
  return () => {
    socket.connectSocket();
    return true;
  };
}
// import { NZ_I18N } from 'ng-zorro-antd/i18n';
// import { zh_CN } from 'ng-zorro-antd/i18n';
// import { registerLocaleData } from '@angular/common';
// import zh from '@angular/common/locales/zh';
// registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configureProvider,
      deps: [WebSocketService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
