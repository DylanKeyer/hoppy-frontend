import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerTableComponent } from './beer-table/beer-table.component'
import { BeerCardComponent } from './beer-card/beer-card.component'

const routes: Routes = [
  { path: 'cards', component: BeerCardComponent },
  { path: 'table', component: BeerTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }