import { TestBed, inject } from '@angular/core/testing';

import { DossierService } from './dossier.service';

describe('DossierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DossierService]
    });
  });

  it('should be created', inject([DossierService], (service: DossierService) => {
    expect(service).toBeTruthy();
  }));
});
