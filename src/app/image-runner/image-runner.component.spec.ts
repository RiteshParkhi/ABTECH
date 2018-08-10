import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRunnerComponent } from './image-runner.component';

describe('ImageRunnerComponent', () => {
  let component: ImageRunnerComponent;
  let fixture: ComponentFixture<ImageRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
