import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { LoginService }      from '../services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.getLocalUser() == undefined){
      this.router.navigate(['login']);
    }

  }

  ngOnInit(): void {
  }

}
