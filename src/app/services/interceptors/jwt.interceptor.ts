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
      'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaWxrby56LmFkYW1vdkBnbWFpbC5jb20iLCJqdGkiOiIwMTcxZDU5YS00ZWNlLTQwMDgtODZhMC01ZTgyZTdhZmQ0MjMiLCJleHAiOjE3MDA0NzgxMzYsImlzcyI6IklaQVNvZnQuY29tIiwiYXVkIjoiSVpBU29mdC5jb20ifQ.ZUTswVmQ4D6ixW2BG0AJFksShtpe5nWcVsJ_WrruvFAxtDsFYRGYKBZiLZa9P8Da4C-HMFEnePGXYmk75j2-8w'
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
