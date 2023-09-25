import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  // private urlApi = "http://localhost:9001/Pokemons/traerPokemon";
  private urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  private urlApiDetail= "https://pokeapi.co/api/v2/pokemon/";

  finalUri:string;

  constructor(private http: HttpClient) { }

  // public getDataPokemon(data: any): Observable<any>{
  //   return this.http.post(this.urlApi,data);
  // }

  public getDataPokemonList(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public getDataPokemonDetail(name:string): Observable<any>{
    this.finalUri=this.urlApiDetail+name
    return this.http.get<any>(this.finalUri);
  } 

}
