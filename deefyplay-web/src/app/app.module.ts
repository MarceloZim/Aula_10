import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { HttpClientModule }       from '@angular/common/http';
import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { UserComponent }          from './user/user.component';
import { HomeComponent }          from './home/home.component';
import { MusicaComponent }        from './musica/musica.component';
import { GeneroComponent }        from './genero/genero.component';
import { ArtistaComponent }       from './artista/artista.component';
import { AlbumComponent }         from './album/album.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarMusicaComponent }  from './editar-musica/editar-musica.component';
import { LoginComponent }         from './login/login.component';
import { FormsModule }            from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    MusicaComponent,
    GeneroComponent,
    ArtistaComponent,
    AlbumComponent,
    EditarUsuarioComponent,
    LoginComponent,
    EditarMusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
