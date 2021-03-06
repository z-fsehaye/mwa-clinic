import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }