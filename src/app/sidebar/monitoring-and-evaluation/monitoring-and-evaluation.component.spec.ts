import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringAndEvaluationComponent } from './monitoring-and-evaluation.component';

describe('MonitoringAndEvaluationComponent', () => {
  let component: MonitoringAndEvaluationComponent;
  let fixture: ComponentFixture<MonitoringAndEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringAndEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringAndEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
