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
    const userRole: any = localStorage.getItem('userRole')
    let requestCopy;
    if (token == null) {
      requestCopy = request.clone(
        {
          headers: request.headers.delete('token')
            .delete('userRole')
        }
      )
    }
    else {
      requestCopy = request.clone(
        {
          headers: request.headers.set('token', token)
            .set('userRole', userRole)
        }
      )
    }

    return next.handle(requestCopy);
  }
}
