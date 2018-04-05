import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'profile-card',
	templateUrl: 'profile-card.html'
})
export class ProfileCard {
	@Input('data') profile:any = {
		"name":"",
		"img":"",
		"description":""
	};

	constructor(public navCtrl: NavController) {
	}

}
