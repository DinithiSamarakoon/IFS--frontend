import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsessionComponent } from './trainingsession.component';

describe('TrainingsessionComponent', () => {
  let component: TrainingsessionComponent;
  let fixture: ComponentFixture<TrainingsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
