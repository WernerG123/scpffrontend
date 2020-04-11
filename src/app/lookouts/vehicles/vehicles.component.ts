import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = ['reg', 'make', 'model', 'year', 'colour', 'description', 'characteristics'];
  dataSource: any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.vehiclesUrl)
      .subscribe((data: any) => {
        this.dataSource = data;
      }, err => {
        console.log('Error: ' + err);
      })
  }

}
