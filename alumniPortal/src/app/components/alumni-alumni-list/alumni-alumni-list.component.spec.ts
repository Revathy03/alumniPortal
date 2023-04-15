import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAlumniListComponent } from './alumni-alumni-list.component';

describe('AlumniAlumniListComponent', () => {
  let component: AlumniAlumniListComponent;
  let fixture: ComponentFixture<AlumniAlumniListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniAlumniListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniAlumniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});