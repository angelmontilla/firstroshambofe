import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompbtnplayComponent } from './compbtnplay.component';

describe('CompbtnplayComponent', () => {
  let component: CompbtnplayComponent;
  let fixture: ComponentFixture<CompbtnplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompbtnplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompbtnplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
