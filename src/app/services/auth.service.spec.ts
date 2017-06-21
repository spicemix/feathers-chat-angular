import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Feathers } from './feathers.service';
import { Router } from '@angular/router';

/* tslint:disable:prefer-const */
let feathersStub: {};
let routerStub: {};
/* tslint:enable:prefer-const */

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,
        { provide: Feathers, useValue: feathersStub },
        { provide: Router, useValue: routerStub }
      ]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
