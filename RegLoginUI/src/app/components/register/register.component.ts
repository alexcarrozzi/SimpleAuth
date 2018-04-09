import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  ReactiveFormsModule,  FormsModule,  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
 
import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';

import { User } from '../../models/User';
 
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;

    registerForm:FormGroup;

    firstName: FormControl;
    lastName: FormControl;
    userName: FormControl;
    email: FormControl;
    password: FormControl;
 
    constructor(private router: Router, private userService: UserService, private alertService: AlertService) { 

    }

    ngOnInit(){
        this.createFormControls();
        this.createForms();  
    }
    
    createForms = () => {
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
 
    register = (firstField, lastField, userField, passField, emailField) => {
        this.loading = true;
        let user:User = new User();
        user.firstName = firstField;
        user.lastName = lastField;
        user.userName = userField;
        user.password = passField;
        user.email = emailField;

        this.userService.register(user)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
            });
    }
}