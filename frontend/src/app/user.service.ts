import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  verifyEmail(email: string): Observable<any> {
    if (email) {
      return this.http.get('http://localhost:3000/api/users/checkemail/' + email);
    }
    return of(null)
  }

  signup(user : any){
    return this.http.post('http://localhost:3000/api/users/signup', user).subscribe((data:any) => {
      localStorage.setItem('token', data.token.toString())
      localStorage.setItem('userEmail', data.userEmail.toString())
      localStorage.setItem('userRole', data.userRole.toString())
      localStorage.setItem('userFullname', data.userFullname.toString())
    })
  }

  login(user : any){
    return this.http.post('http://localhost:3000/api/users/login', user).subscribe((data:any) => {
      localStorage.setItem('token', data.token.toString())
      localStorage.setItem('userEmail', data.userEmail.toString())
      localStorage.setItem('userRole', data.userRole.toString())
      localStorage.setItem('userFullname', data.userFullname.toString())
    })
  }

  // login(user : {}){
  //   this.http.post('http://localhost:3000/api/users/login', user).pipe(map((data:any) => {
  //     if(data)return data
  //     else return null
  //   }))
  // }
}
