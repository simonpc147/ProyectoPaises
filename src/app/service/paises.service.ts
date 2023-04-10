import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Country } from '../interfaces/paises-interface';
import { Observable } from 'rxjs';
import { Regiones } from '../interfaces/regiones-interface';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion( id: string ):Observable<Regiones[]>{
    const url = `${ this.apiUrl }/region/${ id }`;
    return this.http.get<Regiones[]>( url );
  }

  getPaisporCodigo( id: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }

}
