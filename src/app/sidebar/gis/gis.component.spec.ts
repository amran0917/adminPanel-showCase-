import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GISComponent } from './gis.component';

describe('GISComponent', () => {
  let component: GISComponent;
  let fixture: ComponentFixture<GISComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GISComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
