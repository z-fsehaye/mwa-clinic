import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  roles: string[] = [
    "DOCTOR", "PATIENT"
  ]

  constructor(private formBuilder: FormBuilder, private client: HttpClient) {
    this.signupForm = formBuilder.group({
      'fullname': ['', [Validators.required]],
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'roles': ['PATIENT']
    })

  }
  onSubmit() {

  }
}