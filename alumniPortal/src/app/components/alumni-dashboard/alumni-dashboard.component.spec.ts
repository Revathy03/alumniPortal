import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDashboardComponent } from './alumni-dashboard.component';

describe('AlumniDashboardComponent', () => {
  let component: AlumniDashboardComponent;
  let fixture: ComponentFixture<AlumniDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
