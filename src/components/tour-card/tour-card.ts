import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'tour-card',
	templateUrl: 'tour-card.html'
})
export class TourCard {
	@Input('data') tour:any = {
		"name":"",
		"img":"",
		"pax":0,
		"price":0,
		"meet":"",
		"type":""
		};

	constructor(public navCtrl: NavController) {
	}
}
 