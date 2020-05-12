import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBorderComponent } from './circle-border.component';

describe('CircleBorderComponent', () => {
  let component: CircleBorderComponent;
  let fixture: ComponentFixture<CircleBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
