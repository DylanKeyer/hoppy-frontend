import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {Beer} from './beer.model'

@Injectable()
export class BeersApiService {
	
	constructor(private http: HttpClient) {
		
	}
	
	private static _handleError(err: HttpErrorResponse | any) {
		return Observable.throw(err.message || 'Error: Unable to complete request.');
	}

	getBeerColumns(): Array<string> {
		return Object.getOwnPropertyNames(Beer);
	}
	
	getBeers(): Observable<any> {
		return this.http
			.get('http://localhost:5000/api/beer')
			.catch(BeersApiService._handleError);
	}
}