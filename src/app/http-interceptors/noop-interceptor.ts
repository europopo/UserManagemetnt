import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import Cookies from 'js-cookie'
/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let newReq = req;
    if (req.method !== 'GET') {
      newReq = req.clone({
        headers: req.headers.set('x-csrf-token', Cookies.get('csrfToken')),
        withCredentials: true
      });
    } else newReq = req.clone({withCredentials: true});

    return next.handle(newReq).pipe(
      tap(event=>{
        if (event instanceof HttpResponse) {

        }
      }),

    );
  }
}

