import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/paises-interface';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
 
  pais!: Country ;
  
  constructor(
    private service: ActivatedRoute,
    private paisesService:PaisesService
    ) {}

  ngOnInit(): void {
    
    this.service.params
    .subscribe( params =>{
      console.log( params['id']);

         this.paisesService.getPaisporCodigo(params['id'])
         .subscribe( pais => {
           console.log(pais);

          this.pais = pais[0];

         })
    })
  } 
}
