import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  validatePlayers(player1, player2) : void{
    console.log(player1);
    console.log(player2);

  }

}
