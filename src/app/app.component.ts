import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scpf-app';
  description = '';
  reporter = '';
  constructor(public http: HttpClient) {

  }
  addIncident() {
    this.http.post('http://102.130.118.84:1337/incidents', {reporter: this.reporter, description: this.description})
    .subscribe(data => {
      console.log(data);
    })
  }

  addIncidentHttps() {
    this.http.post('https://102.130.118.84:1337/incidents', {reporter: this.reporter, description: this.description})
    .subscribe(data => {
      console.log(data);
    })
  }
}
