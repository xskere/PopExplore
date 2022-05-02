import { TestBed } from '@angular/core/testing';

import { UserUploadService } from './user-upload.service';

describe('UserUploadService', () => {
  let service: UserUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
