import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tour-details',
  templateUrl: 'tour-details.html'
})
export class TourDetailsPage {
	tour:any = {};
	rating:number[] = [];

  constructor(public navCtrl: NavController,
  				public navParams: NavParams) {

  }

  ionViewDidEnter(){
		this.tour = this.navParams.data;
		// for(let i = 0; i < this.profile.rating; i++){
		// 	this.rating.push(1);
		// 	if(i > 5) break;
		// }
	}

}
