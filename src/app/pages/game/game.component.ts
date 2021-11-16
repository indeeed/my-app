import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  title: string = 'game';
  titleText: string = 'משחק';
  

  listsTo: number[]  = [];
  constructor() { 
    
  }

  ngOnInit(): void { 
    
    for (let i = 0; i<8; i++) {
      this.listsTo[i] = i + 1;
    }
    function writethis(){
      alert('yes');
    }
  }

  // אני רוצה לקבל את השם הראשון ברשימה
   
}
