import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {
    /* https://medium.com/swlh/angular-loading-spinner-using-http-interceptor-63c1bb76517b */
  }

  public Set(isLoad: boolean) {
    this.loadingSub.next(isLoad);
  }
}
