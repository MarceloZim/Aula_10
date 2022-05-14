import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistaService } from '../services/artista.service';
import { Artista } from '../services/model/artista';

@Component({
  selector:    'app-editar-artista',
  templateUrl: './editar-artista.component.html',
  styleUrls:  ['./editar-artista.component.scss']
})
export class EditarArtistaComponent implements OnInit {
  
  id        :number = 0;
  nome      :string | undefined;

  constructor(private artistaService: ArtistaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id > 0){
        this.artistaService.buscarArtista(this.id).subscribe(artista => {

          this.nome = artista.nome;
          
        });
      }
    })
   }

  ngOnInit(): void {
    this.nome = "";
  }

  validar(): boolean {
    if (this.nome == ""){
      alert("Informe um nome válido");
      return false;
    }
    return true;
  }

  salvar(){
    if (this.validar()){
      var artista       = new Artista();
      artista.id        = this.id;
      artista.nome      = this.nome;

      if (this.id == 0){
        this.artistaService.criarArtista(artista).subscribe(() => {
          alert("Cadastrado com sucesso");
        });
      } else {
        this.artistaService.atualizarArtista(artista).subscribe(() => {
          alert("Atualizado com sucesso");
        });
      }
    }
  }
}
