import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.page.html',
  styleUrls: ['./detalle-personajes.page.scss'],
})
export class DetallePersonajesPage implements OnInit {

  public personaje: any;

  constructor() { }

  ngOnInit() {
    const _personaje = localStorage.getItem('character');
    if(_personaje == null){
      console.log('No se encontraron datos en localStorage');

    }
    else{
      this.personaje = JSON.parse(_personaje);
      console.log("Este es el personaje que se va a mostrar en la vista de detalle", this.personaje);
    }
  }

}
