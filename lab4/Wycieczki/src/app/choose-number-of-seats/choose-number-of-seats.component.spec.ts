import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNumberOfSeatsComponent } from './choose-number-of-seats.component';

describe('ChooseNumberOfSeatsComponent', () => {
  let component: ChooseNumberOfSeatsComponent;
  let fixture: ComponentFixture<ChooseNumberOfSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseNumberOfSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseNumberOfSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
