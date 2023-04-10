import { Component } from '@angular/core';
import { Regiones } from 'src/app/interfaces/regiones-interface';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
 
})
export class PorRegionComponent {
  
  regiones     :  string[] = ['europe' , 'asia', 'Africa', 'America', 'Oceania', 'Antarctic'];
  regionactiva :  string   = '';
  region       :  Regiones[] = [];


  constructor ( private service : PaisesService) {}

  activarRegion ( region: string ) {
    this.regionactiva = region;

    this.service.buscarRegion( this.regionactiva )
    .subscribe(region => {
      console.log(region)

      this.region = region;
    })
}

}