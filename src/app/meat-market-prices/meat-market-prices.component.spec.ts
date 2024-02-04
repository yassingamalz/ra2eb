import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatMarketPricesComponent } from './meat-market-prices.component';

describe('MeatMarketPricesComponent', () => {
  let component: MeatMarketPricesComponent;
  let fixture: ComponentFixture<MeatMarketPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeatMarketPricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeatMarketPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
