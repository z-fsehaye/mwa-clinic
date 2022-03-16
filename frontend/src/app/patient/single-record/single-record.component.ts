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
  patientEmail: any = ""
  constructor(private router: Router, private recordService: RecordService, private route: ActivatedRoute) {
    let userEmail: any = localStorage.getItem('userEmail')
    this.patientEmail = localStorage.getItem('userEmail')
    this.recordService.getRecordByPatientEmail(userEmail, this.patientEmail).subscribe((data:any) => {
      this.record = data;
      this.visits = data.visits;
    })
    // this.route.paramMap.pipe(
    //   mergeMap((params: any) => this.recordService.getRecordByPatientEmail(userEmail, params.get('email'))
    //   ))
    //   .subscribe((data: any) => {
    //     this.record = data
    //     this.visits = data.visits
    //   })

    
  }

  ngOnInit(): void {
  }

}
