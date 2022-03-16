import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mwaClinic';

  constructor(private router: Router) { }

  onLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userFullname')
    this.router.navigate(['home'])
  }

  isLoggedIn(){
    if(localStorage.getItem('token')) return true;
    else return false;
  }

  isDoctor(){
    let doctor = localStorage.getItem('userRole')
    if(doctor && doctor == 'DOCTOR') return true;
    else return false;
  }

  isPatient(){
    let doctor = localStorage.getItem('userRole')
    if(doctor && doctor == 'PATIENT') return true;
    else return false;
  }
}