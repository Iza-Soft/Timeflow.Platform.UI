import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tf-button-cross-effect',
  templateUrl: './button-cross-effect.component.html',
  styleUrls: ['./button-cross-effect.component.scss'],
})
export class ButtonCrossEffectComponent implements OnInit {
  @Input() title: string;
  @Input() hint: string;
  @Input() active: boolean;
  @Output() clickEvent = new EventEmitter<any>();

  constructor() {}

  public ngOnInit(): void {}

  public onClickEvent() {
    this.clickEvent.emit();
  }
}

// Animated button: https://freefrontend.com/css-button-hover-effects/page/2/
// Arrow box: https://onaircode.com/html-css-arrow-box-examples/
