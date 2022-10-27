import { TestBed } from '@angular/core/testing';

import { DebidoService } from './debido.service';

describe('DebidoService', () => {
  let service: DebidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
