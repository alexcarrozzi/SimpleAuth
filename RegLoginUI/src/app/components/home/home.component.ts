import { Component, OnInit } from '@angular/core';
 
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: User;
    user:any;
    welcome:string;
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.welcome = "Welcome "+this.currentUser.firstName+"!";
    }
}