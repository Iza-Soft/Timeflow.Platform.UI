import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHalfFullerComponent } from './button-half-fuller.component';

describe('ButtonHalfFullerComponent', () => {
  let component: ButtonHalfFullerComponent;
  let fixture: ComponentFixture<ButtonHalfFullerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHalfFullerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonHalfFullerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
