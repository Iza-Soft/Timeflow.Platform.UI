import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_PAGE } from '../shared/enum/nav-page.enum';

@Component({
  selector: 'tf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showFilledHomeIcon: boolean = true;
  public showFilledProfileIcon: boolean = true;

  constructor(public router: Router) {}

  public onMouseEnter(icon: string) {
    if (icon.includes('home')) this.showFilledHomeIcon = false;
    if (icon.includes('profile')) this.showFilledProfileIcon = false;
  }

  public onMouseLeave(icon: string) {
    if (icon.includes('home')) this.showFilledHomeIcon = true;
    if (icon.includes('profile')) this.showFilledProfileIcon = true;
  }

  public onTimeSheet() {
    this.router.navigate([NAV_PAGE.TIMESHEET]);
  }

  public onProfile() {
    console.log('open dropdown menu');
  }

  public onProjects() {
    this.router.navigate([NAV_PAGE.PROJECTS]);
  }

  public onDashboard() {
    this.router.navigate([NAV_PAGE.DASHBOARD]);
  }

  public onCustomers() {
    console.log('show all customers');
  }
}
