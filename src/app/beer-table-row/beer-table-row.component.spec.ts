import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerTableRowComponent } from './beer-table-row.component';

describe('BeerTableRowComponent', () => {
  let component: BeerTableRowComponent;
  let fixture: ComponentFixture<BeerTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
