import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private client : HttpClient) { 
    this.myForm = formBuilder.group({

    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }


}
