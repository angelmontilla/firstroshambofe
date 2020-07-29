import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompselectorComponent } from './compselector.component';

describe('CompselectorComponent', () => {
  let component: CompselectorComponent;
  let fixture: ComponentFixture<CompselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
