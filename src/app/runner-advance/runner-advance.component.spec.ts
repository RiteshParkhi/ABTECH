import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerAdvanceComponent } from './runner-advance.component';

describe('RunnerAdvanceComponent', () => {
  let component: RunnerAdvanceComponent;
  let fixture: ComponentFixture<RunnerAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnerAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
