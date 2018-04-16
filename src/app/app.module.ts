import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BateauComponent } from './bateau/bateau.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { GameBoardComponent } from './game-board/game-board.component';


@NgModule({
  declarations: [
    AppComponent,
    BateauComponent,
    CreatePlayerComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
