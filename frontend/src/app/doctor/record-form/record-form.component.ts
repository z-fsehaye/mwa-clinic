import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
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
  patientEmail: string = ""
  isSuccess : boolean = true;
  isUpdateForm: boolean = false;

  

  constructor(private formBuilder : FormBuilder, private recordService: RecordService, private router: Router, private route: ActivatedRoute) {
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
    this.patientEmail = this.route.snapshot.params['email']
    
    if(this.patientEmail){

      this.isUpdateForm = true;

      this.recordService.getRecordByPatientEmail(this.patientEmail).pipe(first()).subscribe((data:any) => {

        this.recordForm = this.formBuilder.group({
          'fullname': [data.patientInfo['fullname'], [Validators.required]],
          'address': [data.patientInfo['address'], [Validators.required]],
          'email': [data.patientInfo['email'], [Validators.required, Validators.email]],
          'dob': [data.patientInfo['dob'], [Validators.required]],
          'gen': [data.patientInfo['gen']],
          'doctorName': [data.patientInfo.doctor['doctorName']],
          'doctorEmail': [data.patientInfo.doctor['doctorEmail']],
          'visits': [data.visits]
        })
      })
    }
  }
  onSubmit(){
    if(this.patientEmail){
      this.recordService.updateRecord(this.patientEmail, this.recordForm.value).subscribe((data:any) => {
        if(data.success){
          this.router.navigate(['/doctor'])
        }
        else{
          this.isSuccess = false;
        }
      })
    }
    else{
      this.recordService.addRecord(this.recordForm.value).subscribe((data:any) => {
        if(data.success){
          this.router.navigate(['/doctor'])
        }
        else{
          this.isSuccess = false;
        }
      })
    }
    
  }

}
