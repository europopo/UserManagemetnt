import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css']
})
export class SpyComponent implements OnInit {
  heroes = [];
  constructor(

  ) { }

  ngOnInit(): void {
  }

  addhero(name: string){
    if(name){
      this.heroes.push(name.trim());
    }
  }

  reset() {
    this.heroes = [];
  }
}
