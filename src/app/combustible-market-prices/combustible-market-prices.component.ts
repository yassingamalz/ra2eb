import { Component, OnInit } from '@angular/core';

interface Fuel {
  name: string;
  price: number;
  currency: string;
  exchangeRate?: number; // Optional for foreign currencies
}

@Component({
  selector: 'app-combustible-market-prices',
  templateUrl: './combustible-market-prices.component.html',
  styleUrls: ['./combustible-market-prices.component.css']
})
export class CombustibleMarketPricesComponent implements OnInit {
  fuels: Fuel[] = [];

  ngOnInit(): void {
    // Replace with your actual data fetching logic
    this.fuels = [
      { name: 'أوكتان 80', price: 8.75, currency: 'جنيه' },
      { name: 'أوكتان 90', price: 10.25, currency: 'جنيه' },
      { name: 'اوكتان 95', price: 11.5, currency: 'جنيه' },
      // Add more fuels as needed
    ];
  }
}
