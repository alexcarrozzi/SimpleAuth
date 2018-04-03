import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginRegComponent } from './components/login-reg/login-reg.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);