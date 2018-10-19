import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {BeersApiService} from './beers/beers-api.service';
import {Beer} from './beers/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  beerListSubs: Subscription;
  beerList: Beer[];
  
  constructor(private beersApi: BeersApiService) {
	  
  }
  
  ngOnInit() {
	  this.beerListSubs = this.beersApi
		.getBeers()
		.subscribe(res => {
			this.beerList = res;
		},
		console.error
		);
  }
  ngOnDestroy() {
	  this.beerListSubs.unsubscribe();
  }
}
