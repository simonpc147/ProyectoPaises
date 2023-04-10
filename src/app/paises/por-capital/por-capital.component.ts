import { Component } from '@angular/core';
import { Country } from 'src/app/interfaces/paises-interface';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino : string = '';
  hayError: boolean = false;
  capitales : Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor (private service: PaisesService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.service.buscarCapital(this.termino)
    .subscribe(capitales => {
      console.log(capitales);
      this.capitales = capitales;
    }, 
    (error) =>{
      this.hayError  = true;
      this.capitales = []
    }
    )
  }

  sugerencias( termino: Event ) {

    const element = termino.target as HTMLInputElement;
    this.hayError = false;
    this.termino = element.value;
    this.mostrarSugerencias = true;

    console.log(this.termino)
  
     this.service.buscarCapital( this.termino )
      .subscribe( 
         paises => this.paisesSugeridos = paises.splice(0,5),
         (err) => this.paisesSugeridos = []
       );

  }

  teclapresionada (event : any) {
    const valor = event.target.value;
    console.log(valor)
  }


}
