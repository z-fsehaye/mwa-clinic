import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {
  }
  onLogin() {
    this.userService.login(this.loginForm.value)
    if (localStorage.getItem('userRole') == 'PATEINT') {
      this.router.navigate(['patient'])
    }
    else if (localStorage.getItem('userRole') == 'DOCTOR') {
      this.router.navigate(['doctor'])
    }
    else{
      this.router.navigate([''])
    }

  }

}
