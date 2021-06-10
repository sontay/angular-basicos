import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;  
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent{
  
  // agregar( event: any )  {
  //   event.preventDefault();
  //   console.log('Hey !!!');
  // }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 75000
    }
  ];

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  agregar() {
    //console.log( this.nuevo );
    if ( this.nuevo.nombre.trim().length == 0 ) {
      return;
    }
    this.personajes.push( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  cambiarNombre( event: any){
    console.log( event.target.value );
  }

}
