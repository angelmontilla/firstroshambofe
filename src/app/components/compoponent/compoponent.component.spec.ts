import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoponentComponent } from './compoponent.component';

describe('CompoponentComponent', () => {
  let component: CompoponentComponent;
  let fixture: ComponentFixture<CompoponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
