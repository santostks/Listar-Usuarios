import { TestBed } from '@angular/core/testing';

import { UsuService } from './usu-listar.service';

describe('UsuListarService', () => {
  let service: UsuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
