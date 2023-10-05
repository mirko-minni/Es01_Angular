import { Component } from '@angular/core';
//importo il file Json con i libri
import { books } from 'src/assets/dati/books';
@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})
export class LibriComponent {
  title = "Componente libri";
  libri:any = books;//creazione array di libri
  visPag:boolean = false; //serve per visualizzare/nascondere una colonna
  constructor(){
    this.visPag = false;
  }
}
