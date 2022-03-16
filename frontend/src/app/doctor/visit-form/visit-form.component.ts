import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.css']
})
export class VisitFormComponent {
  visitForm : FormGroup
  patientEmail :any
  
  constructor(private formBuilder : FormBuilder, private record: RecordService, private router : Router, private route: ActivatedRoute) {
    this.visitForm = formBuilder.group({
      'date': ['', [Validators.required]],
      'prescription': ['', [Validators.required]],
      'reason': ['', [Validators.required]],
      'diagnosis': ['', [Validators.required]],
      'patientEmail': [''],
  
    })

    this.route.paramMap.subscribe((params: any) => {
      this.patientEmail = params.get('pEmail')
    })
  }

  
  onAddVisit(){
    this.record.addVisit(this.visitForm.value, this.patientEmail)
    this.router.navigate(['/doctor'])
    
  }
 
  }


