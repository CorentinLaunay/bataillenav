import { Component } from '@angular/core';
import { Bateau } from './bateau';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bataille navale';
  gameLaunched = false;

  loadGame() : void {
    console.log('test');
    this.gameLaunched = true;
  }


}
