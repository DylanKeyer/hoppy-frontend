import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {BeersApiService} from '../beers/beers-api.service';
import {Beer} from '../beers/beer.model';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.css']
})
export class BeerTableComponent implements OnInit, OnDestroy {
  beerListSubs: Subscription;
  beerList: Beer[];
  beerColumnsSubs: Subscription;
  beerColumns: Array<string>;
  
  constructor(private beersApi: BeersApiService) {
	  
  }
  
  ngOnInit() {
	  this.beerListSubs = this.beersApi
		.getBeers()
		.subscribe(res => {
			this.beerList = res;
    },
    console.error,
    );
    this.beerColumns = ['id', 'beer_name', 'beer_type'];
  }
  ngOnDestroy() {
	  this.beerListSubs.unsubscribe();
  }
}
