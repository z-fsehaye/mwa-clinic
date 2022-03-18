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
  recordForm : FormGroup;
  isSuccess : boolean = true;

  

  constructor(private formBuilder : FormBuilder, private recordService: RecordService, private router: Router) {
    this.recordForm = formBuilder.group({
      'fullname': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'dob': ['', [Validators.required]],
      'gen': ['PATIENT'],
      'doctorName': [''],
      'doctorEmail': ['']
    })

  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.recordService.addRecord(this.recordForm.value).subscribe((data:any) => {
      if(data.success){
        this.router.navigate(['/doctor'])
      }
      else{
        this.isSuccess = false;
      }
    })
    this.router.navigate(['/doctor'])
  }

}
