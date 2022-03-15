import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, client : HttpClient) {
    this.loginForm = formBuilder.group({
      'email' : ['',Validators.compose([Validators.required])],
      'password' :['',Validators.compose([Validators.required])]
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){

  }

}
