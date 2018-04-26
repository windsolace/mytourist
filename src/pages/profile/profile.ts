import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	profile:any = {};
	rating:number[] = [];

  constructor(public navCtrl: NavController,
  				public navParams: NavParams) {

  }

  ionViewDidEnter(){
		this.profile = this.navParams.data;
		for(let i = 0; i < this.profile.rating; i++){
			this.rating.push(1);
			if(i > 5) break;
		}
	}

}
