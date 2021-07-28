import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  exports: [
    NzIconModule,
    NzToolTipModule,
    NzButtonModule,
    NzPopoverModule,
    NzTableModule,
    NzFormModule,
    NzInputModule
  ]
})
export class NgZorroAntdModule {

}
