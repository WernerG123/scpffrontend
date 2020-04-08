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

  constructor(public http: HttpClient, public router: Router) {

  }
  addIncident() {
    this.http.post('http://102.130.118.84:1337/incidents', {reporter: this.reporter, description: this.description})
    .subscribe(data => {
      console.log(data);
    })
  }
  navToReports() {
    this.router.navigate(['/reports']);
  }

}
