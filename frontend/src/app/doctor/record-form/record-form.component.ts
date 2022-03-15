import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent  {
  gender: string[] = [
    "MALE", "FEMALE"
  ]
  recordForm : FormGroup

  constructor(private formBuilder : FormBuilder, client : HttpClient) {
    this.recordForm = formBuilder.group({
      'fullname': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'dob': ['', [Validators.required]],
      'gen': ['PATIENT'],
      'doctor-name': [''],
      'doctor-email': ['']
    })

  }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }

}
