import { PopOverPage } from './../pages/pop-over/pop-over';

import { MapService } from './../services/map.service';
import { GoogleMap, GoogleMaps } from '@ionic-native/google-maps';
import { SpeakerDetailPage } from './../pages/speaker-detail/speaker-detail';
import { SpeakerService } from './../services/speaker.service';
import { ScheduleService } from './../services/schedule.service';
import { SessionDetailPage } from './../pages/session-detail/session-detail';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FIREBASE_CREDENTIALS, FIREBASE_CREDENTIALS_FLATTENED, FIREBASE_CREDENTIALS_MOSH } from './firebase.credential';
import { SpeakersPage } from './../pages/speakers/speakers';
import { MapPage } from './../pages/map/map';
import { SchedulePage } from './../pages/schedule/schedule';
import { ItemDetailsPage } from './../pages/item-details/item-details';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeachersPage } from "../pages/teachers/teachers";
import { AngularFireModule } from "angularfire2";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage,
    SchedulePage,
    TeachersPage,
    MapPage,
    SpeakersPage,
    SessionDetailPage,
    SpeakerDetailPage,
    PopOverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS_MOSH)
    // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS_FLATTENED)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage,
    SchedulePage,
    TeachersPage,
    SpeakersPage,
    MapPage,
    SessionDetailPage,
    SpeakerDetailPage,
    PopOverPage
  ],
  providers: [
    // GoogleMap,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    ScheduleService,
    SpeakerService,
    MapService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
