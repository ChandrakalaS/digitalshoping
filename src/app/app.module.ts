import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DigiRoutingModule } from './digi-routing/digi-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DigiRoutingModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    BrowserAnimationsModule
    
  ],
  exports:[DigiRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
