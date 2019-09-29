import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { MOCK_DATA } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class MockDataServiceService implements InMemoryDbService {
  createDb() {
    return { files: MOCK_DATA };
  }
}
