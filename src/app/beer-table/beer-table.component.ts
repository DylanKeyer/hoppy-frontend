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
  beerColumns: Array<string> = ['beer_name', 'beer_type', 'ibu', 'abv']
  loading: boolean;

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
  }
  ngOnDestroy() {
    this.beerListSubs.unsubscribe();
  }
}
