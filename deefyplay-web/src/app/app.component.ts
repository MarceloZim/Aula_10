import { Component }      from '@angular/core';
import { startWith }      from 'rxjs';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { LoginService }   from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deefyplay-web';
  constructor(private loginService: LoginService){
  }
  sair(){
    this.loginService.Sair();
  }
}

