import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  heroes: string[] = ['Sipderman','Ironman','Hulk','Thor']
  heroeBorrado: string = '';

  borrarHeroe(): void {
    const heroeBorrado = this.heroes.shift();
    //console.log(heroeBorrado);
    // Si retorna undefined en el caso de que no exista nada por eliminar
    this.heroeBorrado = heroeBorrado || '';

  }

}
