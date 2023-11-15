import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {
    this.toastr.toastrConfig.positionClass = 'toast-top-right';
    this.toastr.toastrConfig.progressBar = true;
  }

  public Error(message: string, title: string): ActiveToast<any> {
    return this.toastr.error(message, title);
  }

  public Success(message: string, title: string): ActiveToast<any> {
    return this.toastr.success(message, title);
  }

  public Warning(message: string, title: string): ActiveToast<any> {
    return this.toastr.warning(message, title);
  }
}
