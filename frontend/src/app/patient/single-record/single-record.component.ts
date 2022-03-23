import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit {
  visits: any = []
  record: any = {}
  patientEmail: any = "patient"
  constructor(private router: Router, private recordService: RecordService, private route: ActivatedRoute) {
    this.recordService.getRecordByPatientEmail(this.patientEmail).subscribe((data:any) => {
      this.record = data;
      this.visits = data.visits;
    })    
  }

  ngOnInit(): void {
  }

  patientVisit(visitId: any){
    console.log(visitId)
    this.router.navigate(['patient', 'visit', visitId])
  }

}
