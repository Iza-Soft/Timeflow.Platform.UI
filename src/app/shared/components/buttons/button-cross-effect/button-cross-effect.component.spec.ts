import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCrossEffectComponent } from './button-cross-effect.component';

describe('ButtonCrossEffectComponent', () => {
  let component: ButtonCrossEffectComponent;
  let fixture: ComponentFixture<ButtonCrossEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCrossEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCrossEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
