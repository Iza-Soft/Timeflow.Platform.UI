import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetWeeklyContentComponent } from './timesheet-weekly-content.component';

describe('TimesheetWeeklyContentComponent', () => {
  let component: TimesheetWeeklyContentComponent;
  let fixture: ComponentFixture<TimesheetWeeklyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetWeeklyContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetWeeklyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
