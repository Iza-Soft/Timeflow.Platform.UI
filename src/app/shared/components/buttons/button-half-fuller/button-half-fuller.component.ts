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
