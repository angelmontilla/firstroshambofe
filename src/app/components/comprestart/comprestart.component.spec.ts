import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprestartComponent } from './comprestart.component';

describe('ComprestartComponent', () => {
  let component: ComprestartComponent;
  let fixture: ComponentFixture<ComprestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
