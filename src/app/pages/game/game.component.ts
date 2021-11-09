import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  title: string = 'game';
  titleText: string = 'משחק';
  constructor() { }

  lists = ['1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

}
