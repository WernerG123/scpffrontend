import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scpf-app';
  description = '';
  reporter = '';
  events: string[] = [];
  opened: boolean;
  isLoggedIn = false;

  constructor(public http: HttpClient, public router: Router) {
    if(!localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('isLoggedIn', 'false');
      this.isLoggedIn = false;
    } else if (localStorage.getItem('isLoggedIn') == 'true') {
      this.isLoggedIn = true;
    }
  }
  addIncident() {
    this.http.post('http://102.130.118.84:1337/incidents', {reporter: this.reporter, description: this.description})
    .subscribe(data => {
      console.log(data);
    })
  }

  checkLogin() {
    if(!localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('isLoggedIn', 'false');
      this.isLoggedIn = false;
      return false;
    } else if (localStorage.getItem('isLoggedIn') == 'true') {
      this.isLoggedIn = true;
      return true;
    }
  }

  navToReports() {
    this.router.navigate(['/reports']);
  }

  navToLookouts() {
    this.router.navigate(['/lookouts']);
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }

}
