import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BeerApiService } from './beers/beers-api-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
  providers: [BeersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
