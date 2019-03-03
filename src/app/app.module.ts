import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


//import { BookingPage } from '../pages/booking/booking';
import { TgDashboardPage } from '../pages/tg-dashboard/tg-dashboard';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TourDetailsPage } from '../pages/tour-details/tour-details';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { TabsPage } from '../pages/tabs/tabs';

import { ProfileCard } from '../components/profile-card/profile-card';
import { TourCard } from '../components/tour-card/tour-card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    //BookingPage,
    ContactPage,
    HomePage,
    LoginPage,
    ProfileCard,
    ProfilePage,
    SearchResultsPage,
    TabsPage,
    TourCard,
    TourDetailsPage,
    TgDashboardPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //BookingPage,
    TgDashboardPage,
    ContactPage,
    HomePage,
    LoginPage,
    ProfilePage,
    SearchResultsPage,
    TabsPage,
    TourDetailsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
