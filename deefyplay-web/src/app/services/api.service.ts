import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';
import { Musica } from './model/musica';
import { Album } from './model/album';
import { Artista } from './model/artista';
import { Genero } from './model/genero';

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

  getAlbum(){
    return this.get<Album[]>(this.url + "Album")
  }

  getMusicas(){
    return this.get<Musica[]>(this.url + "Musica")
  }

  getGenero(){
    return this.get<Genero[]>(this.url + "Genero")
  }

  getArtista(){
    return this.get<Artista[]>(this.url + "Artista")
  }

  
  
}


