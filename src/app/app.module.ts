import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BackgroundGeolocation} from '@ionic-native/background-geolocation/ngx';
import {HTTP} from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
import {AuthenticationService } from './services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as firebase from 'firebase';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';

firebase.initializeApp(environment.firebase);




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule , AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    HTTP,

    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
