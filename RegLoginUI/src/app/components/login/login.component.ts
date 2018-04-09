import {  NgModule,  Component,  Pipe,  OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  ReactiveFormsModule,  FormsModule,  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Md5} from 'ts-md5/dist/md5';
import { AlertService, } from '../../services/alert.service';
import {AuthenticationService} from '../../services/authentication.service';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  userEmailLogin:FormControl;
  passLogin:FormControl;

  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService){

  }

  ngOnInit() { 
    this.createFormControls();
    this.createForms();  
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  createForms = () => {
    this.loginForm = new FormGroup({
      userName: this.userEmailLogin, 
      password: this.passLogin,
      language: new FormControl() 
    });
  }

  login = () => {
    let firstEmailField = this.userEmailLogin.value;
    let passField = this.passLogin.value;
    
    this.loading = true;
    this.authenticationService.login(firstEmailField, passField)
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
       });
    
  }
  
  createFormControls = () => {
    this.userEmailLogin = new FormControl('',Validators.required);
    this.passLogin = new FormControl('',Validators.required);
  }
}
