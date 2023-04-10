import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisesComponent } from './paises/por-paises/por-paises.component';
import { PorRegionComponent } from './paises/por-region/por-region.component';
import { PorCapitalComponent } from './paises/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: 'pais',
    component: PorPaisesComponent,
    pathMatch: 'full'
},
{
    path: 'region',
    component: PorRegionComponent
},
{
    path: 'capital',
    component: PorCapitalComponent
},
{
    path: 'paises/:id',
    component: VerPaisComponent
},
{
    path: '**',
    redirectTo: 'pais'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
