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
  myReports: any;

  displayedColumns: string[] = ['date', 'shiftfrom', 'shiftto', 'edit', 'delete'];
  dataSource: any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getMyReports();
  }

  addReport() {
    this.http.post(environment.reportsUrl, 
      {
        controller: localStorage.getItem('callsign'), 
        shiftfrom: this.shiftfrom,
        shiftto: this.shiftto,
        date: this.date
      })
      .subscribe(data => {
        console.log('Added: ' + data);
        this.getMyReports();
        this.shouldAdd = false;
      }, err => {
        console.log(err);
      })
  }

  createReport() {
    this.shouldAdd = true;
  }

  getMyReports() {
    this.http.get(environment.reportsUrl)
      .subscribe((data: any) => {
        // console.log(data);
        this.myReports = data.filter(x => x.controller == localStorage.getItem('callsign'));
        this.sanitizeData(this.myReports);
        this.dataSource = this.myReports;
        console.log(this.myReports);
      })
  }

  sanitizeData(myReports) {
    myReports.forEach(element => {
      element.date = element.date.substring(0, 10);
    });
  }

}
