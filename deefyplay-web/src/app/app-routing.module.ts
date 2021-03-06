import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { AuthGuardService }       from './auth-guard.service';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { HomeComponent }          from './home/home.component';
import { LoginComponent }         from './login/login.component';
import { MusicaComponent }        from './musica/musica.component';
import { UserComponent }          from './user/user.component';
import { AlbumComponent }         from './album/album.component';
import { ArtistaComponent }       from './artista/artista.component';
import { GeneroComponent }        from './genero/genero.component';
import { EditarMusicaComponent }  from './editar-musica/editar-musica.component';
import { EditarGeneroComponent }  from './editar-genero/editar-genero.component';
import { CadastroComponent }      from './cadastro/cadastro.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { EditarAlbumComponent }   from './editar-album/editar-album.component';

const routes: Routes = [
  {
    path:            '',
    redirectTo: 'login',
    pathMatch:  'full'
  },
  { path: 'home'          , component: HomeComponent         , canActivate: [AuthGuardService] },
  { path: 'login'         , component: LoginComponent                                          },
  { path: 'user'          , component: UserComponent         , canActivate: [AuthGuardService] },
  { path: 'genero'        , component: GeneroComponent       , canActivate: [AuthGuardService] },
  { path: 'musica'        , component: MusicaComponent       , canActivate: [AuthGuardService] },
  { path: 'album'         , component: AlbumComponent        , canActivate: [AuthGuardService] },
  { path: 'artista'       , component: ArtistaComponent      , canActivate: [AuthGuardService] },
  { path: 'editar-usuario', component: EditarUsuarioComponent, canActivate: [AuthGuardService] },
  { path: 'editar-musica' , component: EditarMusicaComponent , canActivate: [AuthGuardService] },
  { path: 'editar-album'  , component: EditarAlbumComponent    , canActivate: [AuthGuardService] },
  { path: 'editar-artista', component: EditarArtistaComponent, canActivate: [AuthGuardService] },
  { path: 'editar-genero' , component: EditarGeneroComponent , canActivate: [AuthGuardService] },
  { path: 'cadastro'      , component: CadastroComponent     , canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
