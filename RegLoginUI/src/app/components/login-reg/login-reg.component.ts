import {  NgModule,  Component,  Pipe,  OnInit} from '@angular/core';
import {  ReactiveFormsModule,  FormsModule,  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Md5} from 'ts-md5/dist/md5';
import {LoginService} from '../../services/login.service';
declare var $: any;


@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  loginForm:FormGroup;
  registerForm:FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  userName: FormControl;
  email: FormControl;
  password: FormControl;

  userEmailLogin:FormControl;
  passLogin:FormControl;

  constructor(private loginService:LoginService){

  }

  ngOnInit() { 
    this.createFormControls();
    this.createForms();  
  }

  createForms = () => {
    this.loginForm = new FormGroup({
      userName: this.userEmailLogin, 
      password: this.passLogin,
      language: new FormControl() 
    });

    this.registerForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      userName: this.userName,
      email: this.email,
      password: this.password,
      language: new FormControl() 
    });
  }

  register = () => {
    let firstField = this.firstName.value;
    let lastField = this.lastName.value;
    let userField = this.userName.value;
    let passField = Md5.apply(this.password.value);
    let emailField = this.email.value;

    this.loginService.register(firstField, lastField, userField, passField, emailField)
    .subscribe(response => {
      console.log(response);
    });
  }

  login = () => {
    let firstEmailField = this.userEmailLogin.value;
    let passField = this.passLogin.value;

    this.loginService.login(firstEmailField, passField)
    .subscribe (response => {
      console.log(response);
    });
  }

  createFormControls = () => {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.userName = new FormControl('', Validators.required);

    this.email = new FormControl('', [ 
      Validators.required,
    Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) 
    ]);

    //password must be 8 characters and contain 1 numerical number
    this.password = new FormControl('', [
      Validators.minLength(8), 
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/)
    ]);
  }
}
