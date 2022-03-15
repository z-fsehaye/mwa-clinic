import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  recordList : any = [];

  constructor(private recordService: RecordService) {
    let docEmail: any = localStorage.getItem('userEmail')
    this.recordService.getPatientRecordsForDoctor(docEmail).subscribe((data:any) => {
      this.recordList = data
    })
  }

  ngOnInit(): void {
  }
  patientRecord(x:any){

  }
  updateRecord(x:any){
    
  }

}
