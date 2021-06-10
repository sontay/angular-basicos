import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroe/heroes.module';

// Tarea:
// remover import { ContadorComponent } from './contador/contador/contador.component'
// Quitar de @NgModule({ declarations: [ el componente ContadorComponent
// Crear un módulo llamado ContadorModule


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
