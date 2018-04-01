import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  loginForm:FormGroup;
  registerForm:FormGroup;

  constructor() { }

  ngOnInit() { 
    this.loginForm = new FormGroup({
        username: new FormControl('', [
          Validators.required
        ]), 
        email: new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ]),
        password: new FormControl('', [
            Validators.minLength(8), 
            Validators.required
        ]),
        language: new FormControl() 
    });

  this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required), 
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [ 
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*") 
      ]),
      //password must be 8 characters and contain 1 numerical number
      password: new FormControl('', [
          Validators.minLength(8), 
          Validators.required,
          Validators.pattern("(?=.*[0-9])")
      ]),
      language: new FormControl() 
    });
  }
}
