import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { HeroeComponent } from './heroe.component';

// Decorador
// exports indica que cosas se quiere hacer visible
// import, adentro solo va modulos
// el modulo CommonModule ofrece directivas como ngIf, ngFor, sino se importa ese modulo dará error porque no existen las directivas ngIf, ngFor
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule{


}

