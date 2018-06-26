import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavearchiveComponent } from './leavearchive.component';

describe('LeavearchiveComponent', () => {
  let component: LeavearchiveComponent;
  let fixture: ComponentFixture<LeavearchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavearchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavearchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
