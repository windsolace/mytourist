import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProfilePage } from '../../pages/profile/profile';
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
		
	}

	getGuides(){
		return this.http.get('assets/data/guides.json');			
	}

	goToProfile(profile){
		this.navCtrl.push(ProfilePage, profile);
	}

}
