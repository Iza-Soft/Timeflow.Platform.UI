import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    sessionStorage.setItem(
      'access-token',
      'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaWxrby56LmFkYW1vdkBnbWFpbC5jb20iLCJqdGkiOiIzODUxN2U2YS1hNWFiLTQ5MzQtODhlZS01MmZjOTJmMjY2M2QiLCJleHAiOjE3MDA1ODE4MDcsImlzcyI6IklaQVNvZnQuY29tIiwiYXVkIjoiSVpBU29mdC5jb20ifQ.YWPunMqPO-2XqL-Mdv7fWDKHMe26wtRfOSjnRl061dd-Tvmu-zqg5ouWjvnk6PK4RQpQyL-y9ACkmMMQAoVWRA'
    );
    const token = sessionStorage.getItem('access-token');

    if (token) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
          // 'Access-Control-Allow-Origin': 'http://timeflow.iza-soft.com/',
          // 'Access-Control-Allow-Headers':
          //   'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
