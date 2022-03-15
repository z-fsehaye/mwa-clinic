import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit {
visits : string [] = []
  constructor() { }

  ngOnInit(): void {
  }

}
