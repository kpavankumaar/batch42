import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1Child2Component } from './sample1-child2.component';

describe('Sample1Child2Component', () => {
  let component: Sample1Child2Component;
  let fixture: ComponentFixture<Sample1Child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample1Child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample1Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
