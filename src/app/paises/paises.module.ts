import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorPaisesComponent } from './por-paises/por-paises.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisesComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule
  ]
})
export class PaisesModule { }
