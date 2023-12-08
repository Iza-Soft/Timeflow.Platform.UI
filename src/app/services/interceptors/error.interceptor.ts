import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificationService } from '../notifications/notification.service';
import { LoadingService } from '..';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private notification: NotificationService,
    private loading: LoadingService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loading.Set(true);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        if (error.status === 401) {
          this.notification.Error(error.error.Description, error.error.Message);
        }
        if (error.status === 0) {
          this.notification.Error(
            'Something went wrong, please try again later!!!',
            'Error'
          );
        }
        this.loading.Set(false);
        return throwError(() => error);
      })
    );
  }
}
