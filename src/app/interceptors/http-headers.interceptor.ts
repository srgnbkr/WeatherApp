import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'content-type': 'application/json',
        authorization: 'apikey 2WPDKCk6roxO6oqxRNiGyJ:7yqji7q8rZNGQ574WsLxtK',
      },
    });
    return next.handle(request);
  }
}
