import { TestBed } from '@angular/core/testing';

import { AlumniDataService } from './alumni-data.service';

describe('AlumniDataService', () => {
  let service: AlumniDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
