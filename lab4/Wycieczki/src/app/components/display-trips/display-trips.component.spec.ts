import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTripsComponent } from './display-trips.component';

describe('DisplayTripsComponent', () => {
  let component: DisplayTripsComponent;
  let fixture: ComponentFixture<DisplayTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
