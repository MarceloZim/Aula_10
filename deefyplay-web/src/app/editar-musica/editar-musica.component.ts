import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Musica }           from '../services/model/musica';
import { MusicaService }    from '../services/musica.service';

@Component({
  selector:    'app-editar-musica',
  templateUrl: './editar-musica.component.html',
  styleUrls:  ['./editar-musica.component.scss']
})
export class EditarMusicaComponent implements OnInit {
  
  id        :    number =0;
  NomeMusica:    string | undefined;

  constructor(private musicaService: MusicaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id > 0){
        this.musicaService.buscarMusica(this.id).subscribe(musica => {

          this.NomeMusica  = musica.NomeMusica;

        });
      }
    })
   }

  ngOnInit(): void {
    this.NomeMusica = "";
  }

  validar(): boolean {
    if (this.NomeMusica == ""){
      alert("Informe um nome válido");
      return false;
    }
    
    return true;
  }

  salvar(){
    if (this.validar()){
      var musica          = new Musica();
      musica.id           = this.id;
      musica.NomeMusica   = this.NomeMusica;
      musica.DataInclusao = new Date();

      if (this.id == 0){
        this.musicaService.criarMusica(musica).subscribe(() => {
          alert("Cadastrado com sucesso");
        });
      } else {
        this.musicaService.atualizarMusica(musica).subscribe(() => {
          alert("Atualizado com sucesso");
        });
      }
    }
  }
}
