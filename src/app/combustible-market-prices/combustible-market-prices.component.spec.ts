import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustibleMarketPricesComponent } from './combustible-market-prices.component';

describe('CombustibleMarketPricesComponent', () => {
  let component: CombustibleMarketPricesComponent;
  let fixture: ComponentFixture<CombustibleMarketPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombustibleMarketPricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombustibleMarketPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
