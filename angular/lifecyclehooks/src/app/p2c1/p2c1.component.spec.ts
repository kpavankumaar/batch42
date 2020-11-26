import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2c1Component } from './p2c1.component';

describe('P2c1Component', () => {
  let component: P2c1Component;
  let fixture: ComponentFixture<P2c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2c1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P2c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
