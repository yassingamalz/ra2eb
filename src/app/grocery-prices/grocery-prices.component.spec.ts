import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryPricesComponent } from './grocery-prices.component';

describe('GroceryPricesComponent', () => {
  let component: GroceryPricesComponent;
  let fixture: ComponentFixture<GroceryPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryPricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
