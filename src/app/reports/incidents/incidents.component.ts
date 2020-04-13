import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  myIncidents: any;
  dataSource: any;
  displayedColumns: string[] = ['time', 'reporter', 'description', 'edit', 'delete'];
  reportId: any;
  shouldAdd = false;
  time: any;
  description: any;
  reporter: any;

  constructor(public http: HttpClient, public router: Router, public route: ActivatedRoute) { }


  ngOnInit(): void {
    this.reportId = this.route.snapshot.paramMap.get('id');
    this.reportId = this.reportId;
    this.getMyIncidents();
  }

  addIncident() {
    this.http.post(environment.incidentsUrl, { reporter: this.reporter, reportId: this.reportId, description: this.description, time: this.time })
      .subscribe((data: any) => {
        console.log(data);
        this.getMyIncidents();
      })
  }

  createIncident() {

  }

  getMyIncidents() {
    this.http.get(environment.incidentsUrl)
      .subscribe((data: any) => {
        this.myIncidents = data;
        this.myIncidents = this.myIncidents.filter(x => x.reportId == this.reportId );
        this.dataSource = this.myIncidents;
        console.log(this.myIncidents);
      })
  }

}
