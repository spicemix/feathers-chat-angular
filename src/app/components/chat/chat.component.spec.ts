import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Feathers } from '../../services/feathers.service';

let feathersStub: {};
let authStub: {};

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent,
      ],
      providers: [
        { provide: AuthService, useValue: authStub },
        DataService, // TODO spy on real DataService
        Feathers
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
