import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1Child1Component } from './sample1-child1.component';

describe('Sample1Child1Component', () => {
  let component: Sample1Child1Component;
  let fixture: ComponentFixture<Sample1Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample1Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample1Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
