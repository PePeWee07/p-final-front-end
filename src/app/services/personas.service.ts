import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../model/Persona';
import { map, delay } from "rxjs/operators";
import { PersonaPage } from '../model/PersonaPage';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  // 192.168.1.108
  url: string = "http://127.0.0.1:8080/api"
  // url: string = "http://192.168.137.47:8080/api"

  constructor(private _http: HttpClient) { }

  getPersona(){ 
    return this._http.get<Persona[]>(this.url+"/personas")
  }
  
  personaPage(id:number){
    return this._http.get<PersonaPage>(this.url+`/personas/page/${id}`);
  }
  
  getPersonId(id: number){
    return this._http.get<Persona>(this.url+`/persona/${id}`);
  }

  deletePerson(id: number){
    return this._http.delete(this.url+`/persona/${id}`)
  }

  register(persona: Persona) {
    let json = JSON.stringify(persona);
    let params = json;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + '/persona', params, { headers: headers }).pipe(map(data => { return data }));
  }

  actualizar(persona: Persona, id: number){
    let json = JSON.stringify(persona);
    let paramns = json;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(this.url+`/persona/${id}`,paramns,{headers: headers}).pipe(map(data => { return data }));
  }

}
