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

 constructor ( private service: PaisesService) {}

  buscar() {
    this.hayError = false;
    this.service.buscarPais(this.termino)
    .subscribe( ( paises) => { 
      console.log(paises);
       this.paises = paises.splice(0,6);

    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });
 }

    // teclapresionada (event : any) {
    //     const valor = event.target.value;
    //     console.log(valor)
    //   }


}
