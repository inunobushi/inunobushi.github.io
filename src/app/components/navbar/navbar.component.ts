import {Component, OnInit, OnDestroy} from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';




import { AuthService } from '../../services/authservice/authentication.service';

//var navbarComponent = require('./navbar.component.html');

export function services(): any {

    return [
        AuthService
    ]
}

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html', //template: navbarComponent,
    providers: services()
})

export class Navbar implements OnDestroy {
    logoutSubscription:Subscription;

    constructor(private http:HttpClient, private authService: AuthService){

    }
    
    isUserLoggedIn = () =>{
        return this.authService.getIsLoggedIn();   
    }

    logout = () => {
        this.authService.logout();
       
    }
    ngOnDestroy() {
        if (this.logoutSubscription != undefined) {
            this.logoutSubscription.unsubscribe();
        }
    }
}