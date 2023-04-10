import { Component } from '@angular/core';
import { Country } from 'src/app/interfaces/paises-interface';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-por-paises',
  templateUrl: './por-paises.component.html',
})
export class PorPaisesComponent {

   termino: string = '';
   hayError: boolean = false;
   paises: Country[] = [];

   paisesSugeridos: Country[] = [];
   mostrarSugerencias: boolean = false;

 constructor ( private service: PaisesService) {}

  buscar() {
    this.hayError = false;
    this.service.buscarPais(this.termino)
    .subscribe( ( paises) => { 
      console.log(paises);
       this.paises = paises;

    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });
 }

    sugerencias( termino: Event ) {

      const element = termino.target as HTMLInputElement;
      this.hayError = false;
      this.termino = element.value;
      this.mostrarSugerencias = true;

      console.log(this.termino)
    
       this.service.buscarPais( this.termino )
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
