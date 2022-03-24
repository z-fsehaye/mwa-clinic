import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-single-visit',
  templateUrl: './single-visit.component.html',
  styleUrls: ['./single-visit.component.css']
})
export class SingleVisitComponent implements OnInit {

  visit: any = {}
  patientEmail: any = ''
  visitId: any = ''
  constructor(private router: Router, private recordService: RecordService, private route: ActivatedRoute) {
    this.patientEmail = this.route.snapshot.params['pEmail'];
    this.visitId = this.route.snapshot.params['visitId']
    this.recordService.getPatientVisitById(this.patientEmail, this.visitId).subscribe((data: any) => {
      this.visit = data.visits[0]
    })
  }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate([''])
  }

}
