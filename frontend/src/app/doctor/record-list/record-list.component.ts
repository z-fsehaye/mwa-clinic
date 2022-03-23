import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  recordList : any = [];

  constructor(private recordService: RecordService, private router : Router) {

    this.recordService.getPatientRecordsForDoctor().subscribe((data:any) => {
      this.recordList = data
      console.log(data)
    })
  }

  ngOnInit() {
    
  }

  patientRecord(p_email:any){
    this.router.navigate(['doctor/list-records/record', p_email])

  }
  updateRecord(p_email:any){
    this.router.navigate(['doctor/list-records/record/update', p_email])
  }

}
