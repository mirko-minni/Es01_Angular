import { Component } from '@angular/core';

@Component({
  selector: 'app-neve',
  templateUrl: './neve.component.html',
  styleUrls: ['./neve.component.css']
})
export class NeveComponent {
  title = "Componente neve";
  dati = [
    { nome: 'Artesina', altezza: '100' },
    { nome: 'Limone', altezza: '65'},
    { nome: 'Argentera', altezza: '120'}
  ];
  constructor(){
    for(let i = 0; i < this.dati.length; i++){
      this.dati[i].altezza = (Math.floor(Math.random()*210 * 100)/ 100).toString();
    }
  }
}
