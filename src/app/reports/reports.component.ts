import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  shouldAdd = false;
  shiftfrom: any;
  shiftto: any;
  date: any;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  addReport() {
    this.http.post(environment.reportsUrl, 
      {
        controller: 'N/A', 
        shiftfrom: this.shiftfrom,
        shiftto: this.shiftto,
        date: this.date
      })
      .subscribe(data => {
        console.log('Added: ' + data);
        this.shouldAdd = false;
      }, err => {
        console.log(err);
      })
  }

  createReport() {
    this.shouldAdd = true;
  }

}
