import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
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
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
 
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