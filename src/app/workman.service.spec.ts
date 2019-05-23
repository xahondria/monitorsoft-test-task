import { TestBed } from '@angular/core/testing';

import { WorkmanService } from './workman.service';

describe('WorkmanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkmanService = TestBed.get(WorkmanService);
    expect(service).toBeTruthy();
  });
});
