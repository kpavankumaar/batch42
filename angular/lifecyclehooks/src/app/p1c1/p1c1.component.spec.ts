import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1c1Component } from './p1c1.component';

describe('P1c1Component', () => {
  let component: P1c1Component;
  let fixture: ComponentFixture<P1c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1c1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P1c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
