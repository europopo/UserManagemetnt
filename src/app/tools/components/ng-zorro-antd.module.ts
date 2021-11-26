import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  exports: [
    NzIconModule,
    NzToolTipModule,
    NzButtonModule,
    NzPopoverModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzAvatarModule,
    NzDrawerModule,
    NzMessageModule,
    NzLayoutModule
  ]
})
export class NgZorroAntdModule {

}
