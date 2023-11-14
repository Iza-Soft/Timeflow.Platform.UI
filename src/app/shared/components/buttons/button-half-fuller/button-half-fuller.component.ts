import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-button-half-fuller',
  templateUrl: './button-half-fuller.component.html',
  styleUrls: ['./button-half-fuller.component.scss'],
})
export class ButtonHalfFullerComponent {
  @Input() title: string;

  constructor() {}
}

// Animated button: https://freefrontend.com/css-button-hover-effects/page/2/
// Arrow box: https://onaircode.com/html-css-arrow-box-examples/
