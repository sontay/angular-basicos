import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';

// en exports, se colocan los componentes que se desea utilizar fuera de este modulo contador
@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
        ]
})

export class ContadorModule {
    
}