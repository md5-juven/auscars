import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     const myToken = localStorage.getItem('token');
     request = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + myToken)
     });
     console.log(request)
    return next.handle(request);
  }
}
