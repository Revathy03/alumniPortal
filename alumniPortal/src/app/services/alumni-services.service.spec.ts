import { TestBed } from '@angular/core/testing';

import { AlumniServicesService } from './alumni-services.service';

describe('AlumniServicesService', () => {
  let service: AlumniServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
