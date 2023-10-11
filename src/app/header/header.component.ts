import { Component } from '@angular/core';

@Component({
  selector: 'tf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showFilledHomeIcon: boolean = true;
  public showFilledProfileIcon: boolean = true;

  constructor() {}

  public onMouseEnter(icon: string) {
    if (icon.includes('home')) this.showFilledHomeIcon = false;
    if (icon.includes('profile')) this.showFilledProfileIcon = false;
  }

  public onMouseLeave(icon: string) {
    if (icon.includes('home')) this.showFilledHomeIcon = true;
    if (icon.includes('profile')) this.showFilledProfileIcon = true;
  }

  public onTimeSheet() {
    console.log('show timesheet');
  }

  public onProfile() {
    console.log('open dropdown menu');
  }

  public onProject() {
    console.log('show all projects');
  }

  public onDashboard() {
    console.log('go to dashboard');
  }
}
