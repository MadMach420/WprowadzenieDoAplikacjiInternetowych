import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayObjComponent } from './display-obj.component';

describe('DisplayObjComponent', () => {
  let component: DisplayObjComponent;
  let fixture: ComponentFixture<DisplayObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayObjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
