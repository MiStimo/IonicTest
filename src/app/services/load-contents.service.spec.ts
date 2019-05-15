import { TestBed } from '@angular/core/testing';

import { LoadContentsService } from './load-contents.service';

describe('LoadContentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadContentsService = TestBed.get(LoadContentsService);
    expect(service).toBeTruthy();
  });
});
