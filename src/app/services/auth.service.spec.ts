import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Feathers } from './feathers.service';
import { Router } from '@angular/router';

let feathersStub: {};
let routerStub: {};

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
