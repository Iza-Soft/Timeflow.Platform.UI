import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ICON_SVG_CONFIG } from '../../config/icon-svg.config';

const cash = {};

@Component({
  selector: 'tf-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss'],
})
export class IconSvgComponent implements OnInit, AfterViewInit {
  @Input() iconName: string;
  @Input() events: Observable<string>;

  @ViewChild('image') image: ElementRef;

  public url: string;

  constructor() {}

  public ngOnInit() {
    if (this.events) {
      this.events.subscribe((icon_name) => {
        if (icon_name) {
          this.iconName = icon_name;
          this.SetUrlImage();
          this.image.nativeElement.src = this.url;
        }
      });
    }
    this.SetUrlImage();
  }

  public ngAfterViewInit() {
    this.image.nativeElement.src = this.url;
  }

  private SetUrlImage() {
    if (cash[this.iconName]) {
      this.url = cash[this.iconName];
    } else {
      const svgString = ICON_SVG_CONFIG[this.iconName];
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgString, 'image/svg+xml');
      const svgElement = new XMLSerializer().serializeToString(
        doc.documentElement
      );
      const encodedData = window.btoa(svgElement);
      this.url = 'data:image/svg+xml;base64,' + encodedData;
      cash[this.iconName] = this.url;
    }
  }
}
