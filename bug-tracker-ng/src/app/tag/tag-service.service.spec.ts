import { TestBed } from '@angular/core/testing';
import { AuthHeaderService } from '../shared/auth-header.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TagServiceService } from './tag-service.service';
import { BugService } from '../bugs/index-bug';

describe('TagServiceService', () => {
  let service: TagServiceService;
  let mockAuthHeaderService: jasmine.SpyObj<AuthHeaderService>;
  let mockBugService: jasmine.SpyObj<BugService>;

  beforeEach(() => {
    const authHeaderSpy = jasmine.createSpyObj<AuthHeaderService>(['getAuthHeader']);
    const bugServiceSpy = jasmine.createSpyObj<BugService>(['getBugById', 'updateBug','addBug', 'updateBugData']);

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: AuthHeaderService, useValue: authHeaderSpy },
        { provide: BugService, useValue: bugServiceSpy }
      ]
    });
    service = TestBed.inject(TagServiceService);
    mockAuthHeaderService = TestBed.inject(AuthHeaderService) as jasmine.SpyObj<AuthHeaderService>;
    mockBugService = TestBed.inject(BugService) as jasmine.SpyObj<BugService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
