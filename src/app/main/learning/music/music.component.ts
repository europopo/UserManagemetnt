import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  music = new Audio('../../assets/musicfile/新垣結衣 - 小さな恋のうた.mp3');

  playmusic() {
    this.music.load();
    this.music.play();


  }
  pause() {
    this.music.pause();
  }
}
