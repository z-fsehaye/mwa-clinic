import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit {
  visits : string [] = []
  private record:any = {}
  constructor(private router : Router, private recordService: RecordService, private route: ActivatedRoute) {
    let userEmail: any= localStorage.getItem('userEmail')
    recordService.getRecordByPatientEmail(userEmail, 'sd')
  }

  ngOnInit(): void {
  }
  addVisit(){
    this.router.navigate(['doctor','add-visit'])
  }

}
