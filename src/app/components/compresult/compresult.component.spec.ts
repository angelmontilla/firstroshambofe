import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresultComponent } from './compresult.component';

describe('CompresultComponent', () => {
  let component: CompresultComponent;
  let fixture: ComponentFixture<CompresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
