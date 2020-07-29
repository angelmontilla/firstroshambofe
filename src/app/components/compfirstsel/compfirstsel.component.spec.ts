import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompfirstselComponent } from './compfirstsel.component';

describe('CompfirstselComponent', () => {
  let component: CompfirstselComponent;
  let fixture: ComponentFixture<CompfirstselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompfirstselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompfirstselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
