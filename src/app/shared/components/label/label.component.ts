import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  @Input() title: string;
  @Input() titleSize?: string;
  @Input() titleColor?: string;

  @Input() hint?: string;
  @Input() hintSize?: string;
  @Input() hintColor?: string;

  constructor() {}

  public ngOnInit(): void {}
}
