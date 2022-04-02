import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://localhost:44327/api/";
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.get<Usuario[]>(this.url + "Usuario")
  }

  private get<T>(fullUrl: string) : Observable<T>
  {
    return this.http.get<T>(fullUrl);
  }
}
