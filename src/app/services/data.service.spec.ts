import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { Feathers } from './feathers.service';

/* tslint:disable:prefer-const */
let feathersStub: {};
/* tslint:enable:prefer-const */

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService,
        { provide: Feathers, useValue: feathersStub }]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
