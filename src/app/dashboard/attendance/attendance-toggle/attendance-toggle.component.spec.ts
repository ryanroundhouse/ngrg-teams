import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceToggleComponent } from './attendance-toggle.component';

describe('AttendanceToggleComponent', () => {
  let component: AttendanceToggleComponent;
  let fixture: ComponentFixture<AttendanceToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
