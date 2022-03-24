import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { flatMap, map, mergeMap, of } from 'rxjs';
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
  isVisitOpen: boolean = false;
  constructor(private router: Router, private recordService: RecordService, private route: ActivatedRoute) {
    this.patientEmail = this.route.snapshot.params['email'];
    this.recordService.getRecordByPatientEmail(this.patientEmail).subscribe((data: any) => {
      this.record = data;
      this.visits = data.visits
    })
  }

  ngOnInit() {

  }
  addVisit() {
    this.router.navigate(['doctor', 'patient-record', this.patientEmail, 'add-visit'])
  }
  patientVisit(visitId: any) {
    this.router.navigate(['doctor', 'patient-record', this.patientEmail, 'visit', visitId])
  }

  toggleVisit(){
    this.isVisitOpen = !this.isVisitOpen;
  }

}
