import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { LoginRegComponent } from './login-reg.component';

describe('LoginRegComponent', () => {
  let component: LoginRegComponent;
  let fixture: ComponentFixture<LoginRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
