import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
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


  constructor (private service: PaisesService) {}

  // ngOnDestroy(): void {
  //   console.log("destruido")
    
  

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.service.buscarCapital(this.termino)
    .subscribe(capitales => {
      console.log(capitales);
      this.capitales = capitales.splice(0,6);
    }, 
    (error) =>{
      this.hayError  = true;
      this.capitales = []
    }
    )
  }

  // teclapresionada (event : any) {
  //   const valor = event.target.value;
  //   console.log(valor)
  // }


}
