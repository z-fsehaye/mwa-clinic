import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent  {
  recordForm : FormGroup

  constructor(private formBuilder : FormBuilder, client : HttpClient) {
    this.recordForm = formBuilder.group({
        
    })

  }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }

}
