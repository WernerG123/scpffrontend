import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = ['reg', 'make', 'model', 'year', 'colour'];
  dataSource: any;
  expandedElement: any | null;

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
