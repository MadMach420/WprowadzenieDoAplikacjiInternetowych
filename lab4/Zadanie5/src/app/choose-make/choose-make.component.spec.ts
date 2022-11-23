import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMakeComponent } from './choose-make.component';

describe('ChooseMakeComponent', () => {
  let component: ChooseMakeComponent;
  let fixture: ComponentFixture<ChooseMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
