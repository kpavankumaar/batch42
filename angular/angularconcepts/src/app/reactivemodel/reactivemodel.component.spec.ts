import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivemodelComponent } from './reactivemodel.component';

describe('ReactivemodelComponent', () => {
  let component: ReactivemodelComponent;
  let fixture: ComponentFixture<ReactivemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivemodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
