import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit {
  visits : string [] = []
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  addVisit(){
    this.router.navigate(['doctor','add-visit'])
  }

}
