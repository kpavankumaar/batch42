import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1c2Component } from './p1c2.component';

describe('P1c2Component', () => {
  let component: P1c2Component;
  let fixture: ComponentFixture<P1c2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1c2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P1c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
