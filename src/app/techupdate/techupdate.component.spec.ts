import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechupdateComponent } from './techupdate.component';

describe('TechupdateComponent', () => {
  let component: TechupdateComponent;
  let fixture: ComponentFixture<TechupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
