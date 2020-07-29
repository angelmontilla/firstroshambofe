import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptitleComponent } from './comptitle.component';

describe('ComptitleComponent', () => {
  let component: ComptitleComponent;
  let fixture: ComponentFixture<ComptitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
