import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AlbumService }      from '../services/album.service';
import { Album }             from '../services/model/album';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: Album[] | undefined;

  constructor(private albumService: AlbumService, private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.albumService.buscarAlbums().subscribe(albums => {
      this.albums = albums
    });
  }

  editar(id:any){
    this.router.navigate(['/editar-album', { id: id }]);
  }

  excluir(id: any){
    this.albumService.excluirAlbum(Number(id)).subscribe(() => {
      alert("Album excluido com sucesso");
      this.Load();
    });
  }
}
