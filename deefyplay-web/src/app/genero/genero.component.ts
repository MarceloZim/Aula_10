import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { GeneroService }     from '../services/genero.service';
import { Genero }            from '../services/model/genero';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  generos: Genero[] | undefined;

  constructor(private generoService: GeneroService, private router: Router) {

  }

  ngOnInit(): void {
    this.Load();
  }

  Load(){
    this.generoService.buscarGeneros().subscribe(generos => {
      this.generos = generos
    });
  }

  editar(id:any){
    this.router.navigate(['/editar-genero', { id: id }]);
  }

  excluir(id: any){
    this.generoService.excluirGenero(Number(id)).subscribe(() => {
      alert("Generos excluido com sucesso");
      this.Load();
    });
  }
}