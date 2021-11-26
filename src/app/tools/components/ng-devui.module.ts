import { NgModule } from '@angular/core';

import { DevUIModule } from 'ng-devui';
import { SliderModule } from 'ng-devui/slider';

@NgModule({
  exports: [
    DevUIModule,
    SliderModule
  ]
})
export class NgDevuiModule {

}
