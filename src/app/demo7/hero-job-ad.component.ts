import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <style>
      .job-ad {
        background-color: Aquamarine ;
        width: 40%;
        border: 1px solid black;
        border-radius: 30px;
        padding-left: 30px;
      }
    </style>

    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
