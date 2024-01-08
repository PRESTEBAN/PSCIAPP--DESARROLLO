import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

@NgModule({
  declarations: [
                 AppComponent,
                 MainComponent,
                 RegisterComponent,
                 LoginComponent
                ],
  imports: [
           BrowserModule,
           IonicModule.forRoot(), 
           AppRoutingModule,
           AngularFireModule.initializeApp(environment.firebaseConfig),
           AngularFireAuthModule,
           AngularFirestoreModule,
           ReactiveFormsModule,
           provideFirebaseApp(() => initializeApp({"projectId":"viberisedb-8b4cb","appId":"1:415215164118:web:5290e0f168c90b4d5d4777","storageBucket":"viberisedb-8b4cb.appspot.com","apiKey":"AIzaSyBeDocnIWswkLe7U6EMiULZaziccAiZiX4","authDomain":"viberisedb-8b4cb.firebaseapp.com","messagingSenderId":"415215164118","measurementId":"G-HLJQ2JSGJ2"})),
           provideAuth(() => getAuth()),
           provideAnalytics(() => getAnalytics()),
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
