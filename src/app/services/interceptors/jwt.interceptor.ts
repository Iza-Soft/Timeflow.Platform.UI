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
      'aeyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaWxrby56LmFkYW1vdkBnbWFpbC5jb20iLCJqdGkiOiJlZWE2OWRhNy00ZTllLTRjYzUtOGVhMy1jZmQ3NDNhMzhkYzUiLCJleHAiOjE2OTk4ODE3NTgsImlzcyI6IklaQVNvZnQuY29tIiwiYXVkIjoiSVpBU29mdC5jb20ifQ.AS-HK_qMHUov0qR0mUzq8YS4-Egpn7PnjVGEH5Ro27pHJXK_8W8J_eJXsriDZONDmCh-MVbr9O5PpOahN7-myg'
    );
    const token = sessionStorage.getItem('access-token');

    if (token) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
