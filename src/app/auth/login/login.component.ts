import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }

  login() {
    this.http.post(environment.authUrl, {identifier: this.username, password: this.password})
      .subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('jwt', data.jwt);
        localStorage.setItem('callsign', data.user.callsign);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/reports']);        
      })
  }

}
