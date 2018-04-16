import { Component, OnInit } from '@angular/core';
import { Bateau } from '../bateau';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.css']
})
export class BateauComponent implements OnInit {
  listeBateaux = [
    new Bateau(1, 'Porte-Avion', 5),
    new Bateau(2, 'Croiseur', 4),
    new Bateau(3, 'Contre-Torpilleur', 3),
    new Bateau(4, 'Sous Marin', 2),
    new Bateau(5, 'Torpilleur', 1),

  ]
  constructor() { }


  ngOnInit() {
  }

}
