import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  recordList : string [] = [];

  constructor() { }

  ngOnInit(): void {
  }
  patientRecord(x:any){

  }
  updateRecord(x:any){
    
  }

}
