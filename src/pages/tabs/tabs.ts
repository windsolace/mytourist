import { Component } from '@angular/core';

//import { BookingPage } from '../booking/booking';
import { TgDashboardPage } from '../tg-dashboard/tg-dashboard';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TgDashboardPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;

  constructor() {

  }
}
