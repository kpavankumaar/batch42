import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2c2Component } from './p2c2.component';

describe('P2c2Component', () => {
  let component: P2c2Component;
  let fixture: ComponentFixture<P2c2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2c2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P2c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
