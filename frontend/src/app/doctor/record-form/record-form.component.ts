import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordService } from 'src/app/record.service';

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
  public docEmail: any = localStorage.getItem('userEmail')
  public docName: any = localStorage.getItem('userFullname')
  public visits: any = []

  

  constructor(private formBuilder : FormBuilder, private recordService: RecordService, private router: Router) {
    this.recordForm = formBuilder.group({
      'fullname': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'dob': ['', [Validators.required]],
      'gen': ['PATIENT'],
      'doctorName': [this.docName],
      'doctorEmail': [this.docEmail]
    })

  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.recordService.addRecord(this.recordForm.value)
    this.router.navigate(['/doctor'])
  }

}
