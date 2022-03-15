import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.css']
})
export class VisitFormComponent implements OnInit {
  visitForm : FormGroup
  
  constructor(private formBuilder : FormBuilder, private router : Router) {
    this.visitForm = formBuilder.group({
      'date': ['', [Validators.required]],
      'prescription': ['', [Validators.required]],
      'reason': ['', [Validators.required]],
      'diagnosis': ['', [Validators.required]],
      'patientEmail': [''],
  
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(){

  }
 
  }


