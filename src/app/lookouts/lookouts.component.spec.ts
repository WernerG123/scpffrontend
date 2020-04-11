import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookoutsComponent } from './lookouts.component';

describe('LookoutsComponent', () => {
  let component: LookoutsComponent;
  let fixture: ComponentFixture<LookoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
