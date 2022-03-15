import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { flatMap, mergeMap, of } from 'rxjs';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit {
  visits: string[] = []
  record: any = {}
  patientEmail: any = ""
  constructor(private router: Router, private recordService: RecordService, private route: ActivatedRoute) {
    

  }

  ngOnInit(): void {
    let userEmail: any = localStorage.getItem('userEmail')
    this.patientEmail = this.route.paramMap.pipe(
      mergeMap((params: any) => this.recordService.getRecordByPatientEmail(userEmail, params.get('email'))))
      .subscribe((data:any) => { this.record = data
      this.visits = data.visits })
    console.log('this is patiEmail ' + this.patientEmail)
  }
  addVisit() {
    this.router.navigate(['doctor', 'add-visit'])
  }

}
