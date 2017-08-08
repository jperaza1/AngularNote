import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDq453Oqn8jkneKlIjsGw41RiBE6LOT1Tc",
    authDomain: "autenticador-b07a4.firebaseapp.com",
    databaseURL: "https://autenticador-b07a4.firebaseio.com",
    projectId: "autenticador-b07a4",
    storageBucket: "autenticador-b07a4.appspot.com",
    messagingSenderId: "774237153355"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
