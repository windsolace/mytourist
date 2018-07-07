import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TourDetailsPage } from '../../pages/tour-details/tour-details';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-searchresults',
	templateUrl: 'search-results.html'
})
export class SearchResultsPage {
	data:any = {
		"location":"",
		"checkin":"",
		"checkout":"",
		"travellers":""
	};
	guideList:any = [];
	tourList:any=[];
	

	constructor(public http: HttpClient,
				public navCtrl: NavController,
				public params: NavParams) {
	}

	ionViewDidEnter(){
		console.log(this.params.data);
		this.data = this.params.data;
		this.getGuides().subscribe(response => {
			this.guideList = response;
		}, err=> {
			console.error(err);
		});

		this.getTours().subscribe(response => {
			this.tourList = response;
		}, err=> {
			console.error(err);
		});
		
	}

	getGuides(){
		return this.http.get('assets/data/guides.json');			
	}

	getTours(){
		return this.http.get('assets/data/tours.json');			
	}

	goToProfile(profile){
		this.navCtrl.push(ProfilePage, profile);
	}

	goToTour(tour){
		this.navCtrl.push(TourDetailsPage, tour);
	}
}
