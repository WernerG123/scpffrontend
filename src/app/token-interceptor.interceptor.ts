import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('auth')) {
      const modified = request.clone({setHeaders: {'Authorization': 'Bearer ' + localStorage.getItem('jwt')}});
      return next.handle(modified);
    } else {
      return next.handle(request);
    }
    
  }
}
