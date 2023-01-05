import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-machine-management',
  templateUrl: './machine-management.component.html',
  styleUrls: ['./machine-management.component.css']
})

export class MachineManagementComponent implements OnInit{
  machineCodes: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8083/api/machines').subscribe(data => {
      this.machineCodes = data;
    });
  }
}
