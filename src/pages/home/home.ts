import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	currentDate:string="";

	//models
	checkinDate:string = "";
	checkoutDate:string = "";
	location:string="";
	travellers:number=1;
	

	constructor(public navCtrl: NavController) {

	}

	ionViewDidEnter() {
		this.currentDate = this.generateTodayDate();
	}

	doSearch(){
		console.log("location - " + this.location);
		console.log("checkinDate - " + this.checkinDate);
		console.log("checkoutDate - " + this.checkoutDate);
		console.log("travellers - " + this.travellers);
		let search = {
			"location":this.location,
			"checkin":this.checkinDate,
			"checkout":this.checkoutDate,
			"travellers":this.travellers
		}
		this.navCtrl.push(SearchResultsPage, search);

	}

	/**
 	 * Generates today's date for placeholder
 	 * @return string e.g. Tue 3 Apr
	 */
	generateTodayDate () {
		let dayArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
		let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var today = new Date();
		let ddd:any = today.getDay();
		let dd:any = today.getDate();
		let mm:any = today.getMonth()+1; 
		let yyyy:any = today.getFullYear();

		if(dd<10) {
			dd="0"+dd;
		}
		if(mm<10) {
			mm="0"+mm;
		}

		//auto assign checkinDate
		this.checkinDate=yyyy+"-"+mm+"-"+dd;
		this.checkoutDate=yyyy+"-"+mm+"-"+dd;

		return dayArr[ddd] + " " + dd + " " + monthArr[mm-1];
	}

}
