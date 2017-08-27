import { TestBed, inject } from '@angular/core/testing';

import { PasswordvalidatorService } from './passwordvalidator.service';

describe('PasswordvalidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordvalidatorService]
    });
  });

  it('should be created', inject([PasswordvalidatorService], (service: PasswordvalidatorService) => {
    expect(service).toBeTruthy();
  }));
});
