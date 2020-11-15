import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleChild1Component } from './sample-child1.component';

describe('SampleChild1Component', () => {
  let component: SampleChild1Component;
  let fixture: ComponentFixture<SampleChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
