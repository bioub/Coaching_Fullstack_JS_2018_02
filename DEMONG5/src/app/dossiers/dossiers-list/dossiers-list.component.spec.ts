import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersListComponent } from './dossiers-list.component';

describe('DossiersListComponent', () => {
  let component: DossiersListComponent;
  let fixture: ComponentFixture<DossiersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
