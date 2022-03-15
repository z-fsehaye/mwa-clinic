import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.signupForm = formBuilder.group({
      'fullname': ['', [Validators.required]],
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'role': ['PATIENT', []]
    })

  }
  onSignup() {
    this.userService.signup(this.signupForm.value)
    
    if (this.signupForm.value.role == 'PATEINT') {
      this.router.navigate(['/patient'])
    }
    else if (this.signupForm.value.role == 'DOCTOR') {
      this.router.navigate(['/doctor'])
    }
    else{
      this.router.navigate([''])
    }
  }
}