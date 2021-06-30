import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let HttpClient: HttpClientModule;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    // HttpClient = TestBed.inject(HttpClientModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
