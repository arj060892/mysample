import { TestBed, inject } from '@angular/core/testing';

import { PostHelperService } from './post-helper.service';

describe('PostHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostHelperService]
    });
  });

  it('should be created', inject([PostHelperService], (service: PostHelperService) => {
    expect(service).toBeTruthy();
  }));
});
