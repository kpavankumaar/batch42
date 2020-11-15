import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleChild2Component } from './sample-child2.component';

describe('SampleChild2Component', () => {
  let component: SampleChild2Component;
  let fixture: ComponentFixture<SampleChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
