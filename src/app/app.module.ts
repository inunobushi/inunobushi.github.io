import {NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { Navbar} from './components/navbar/navbar.component';
import { routes } from "./routes/routes.module";


import { AuthService } from '../app/services/authservice/authentication.service';
import { AuthGuard } from './common/authguard/authguard.guard';

export function declarations(): any {
    return [
        Navbar
    ]
}


@NgModule({
    declarations: [ 
        AppComponent,
        declarations()
    ],      
    imports: [
       BrowserModule,
       RouterModule.forRoot(routes),
       TooltipModule.forRoot(),
       FormsModule,
       HttpClientModule,
       CollapseModule
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
 })
 export class AppModule { 
   
 }