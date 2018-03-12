import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersShowComponent } from './dossiers-show.component';

describe('DossiersShowComponent', () => {
  let component: DossiersShowComponent;
  let fixture: ComponentFixture<DossiersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
