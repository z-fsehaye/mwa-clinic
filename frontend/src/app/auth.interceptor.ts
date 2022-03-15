import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: any = localStorage.getItem('token')
    const userEmail: any = localStorage.getItem('userEmail')
    const userRole: any = localStorage.getItem('userRole')
    const userFullname: any = localStorage.getItem('userFullname')
    let requestCopy;
    if (token == null) {
      requestCopy = request.clone(
        {
          headers: request.headers.delete('token')
            .delete('userEmail')
            .delete('userRole')
            .delete('userFullname')
        }
      )
    }
    else {
      requestCopy = request.clone(
        {
          headers: request.headers.set('token', token)
            .set('userEmail', userEmail)
            .set('userRole', userRole)
            .set('userFullname', userFullname)
        }
      )
    }

    return next.handle(requestCopy);
  }
}
