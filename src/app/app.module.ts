import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { BookingPage } from '../pages/booking/booking';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
//import { TourDetailsPage } from '../pages/tour-details/tour-details';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { TabsPage } from '../pages/tabs/tabs';

import { ProfileCard } from '../components/profile-card/profile-card';
//import { TourCard } from '../components/tour-card/tour-card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BookingPage,
    ContactPage,
    HomePage,
    ProfileCard,
    ProfilePage,
    SearchResultsPage,
    TabsPage
    //TourCard,
    //TourDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookingPage,
    ContactPage,
    HomePage,
    ProfilePage,
    SearchResultsPage,
    TabsPage
    //TourDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
