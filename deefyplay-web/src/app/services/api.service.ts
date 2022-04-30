import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable }              from '@angular/core';
import { Observable }              from 'rxjs';
import { Usuario }                 from './model/usuario';
import { Musica }                  from './model/musica';
import { Album }                   from './model/album';
import { Artista }                 from './model/artista';
import { Genero }                  from './model/genero';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUsuarios() {
    throw new Error('Method not implemented.');
  }

  public url = "https://localhost:44327/api/";

  constructor(private http: HttpClient) { }

  public get<T>(fullUrl: string) : Observable<T> {
    return this.http.get<T>(fullUrl);
  }

  public post<T>(fullurl: string, json: any) {
    var headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    var httpOptions = {
        headers: headers
    }
    return this.http.post(fullurl, json, httpOptions);
  }

  public put<T>(fullurl: string, json: any) {
    var headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    var httpOptions = {
        headers: headers
    }
    return this.http.put(fullurl, json, httpOptions);
  }

  public delete(fullurl: string){
    return this.http.delete(fullurl);
  }

}


