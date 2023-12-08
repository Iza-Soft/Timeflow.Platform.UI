import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Timeflow.Platform.UI';
  isLoad: boolean = false;
  constructor(private loading: LoadingService) {}

  public ngOnInit(): void {
    this.loading.loadingSub.pipe(delay(0)).subscribe((isLoad) => {
      this.isLoad = isLoad;
    });
  }
}
