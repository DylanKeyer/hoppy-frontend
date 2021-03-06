import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BeersApiService } from './beers/beers-api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BeerTableComponent } from './beer-table/beer-table.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeerTableComponent,
    BeerCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BeersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
