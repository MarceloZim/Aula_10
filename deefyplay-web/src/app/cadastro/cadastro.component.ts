import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../services/model/album';
import { Artista } from '../services/model/artista';
import { Genero } from '../services/model/genero';
import { Musica } from '../services/model/musica';
import { Usuario } from '../services/model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuarios: Usuario [] | undefined
  musicas : Musica  [] | undefined
  albuns  : Album   [] | undefined
  artistas: Artista [] | undefined
  generos : Genero  [] | undefined
  constructor(private router: Router, public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  editarUsuario(id:any){
    this.router.navigate(['/editar-usuario', { id: id }]);
  }
  editarMusica(id:any){
    this.router.navigate(['/editar-musica', { id: id }]);
  }
  editarAlbum(id:any){
    this.router.navigate(['/editar-album', { id: id }]);
  }
  editarArtista(id:any){
    this.router.navigate(['/editar-artista', { id: id }]);
  }
  editarGenero(id:any){
    this.router.navigate(['/editar-genero', { id: id }]);
  }

}
