import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CaretRightOutline, PauseOutline, UserOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ CaretRightOutline, PauseOutline, UserOutline ];

@NgModule({
  imports: [
    NzIconModule.forRoot(icons),
  ],
  exports: [
    NzIconModule
  ]
})
export class DemoNgZorroAntdModule {

}
