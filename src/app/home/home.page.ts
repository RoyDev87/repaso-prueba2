import { Component, OnInit } from '@angular/core';
import { RickService } from '../services/rick.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //Se crea una variable publica para poder acceder a ella desde el html
  public characters: any;

  constructor(
    private rickService: RickService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.rickService.getCharacters().subscribe((data)=>{
      //Usamos persistencia de datos para guardar los datos en el local storage
      console.log("Esta es la información de los personajes de la API", data);
      this.characters = data;
      localStorage.setItem('characters', JSON.stringify(data));
    });
  }

  detalle(personaje: any){
    console.log("Este es el personaje que se va a enviar a la vista de detalle", personaje);
    localStorage.setItem('character', JSON.stringify(personaje));
    this.router.navigateByUrl('/detalle-personajes');
  }

}
