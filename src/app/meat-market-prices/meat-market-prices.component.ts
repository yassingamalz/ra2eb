import { Component, OnInit } from '@angular/core';

interface Meat {
  name: string;
  price: number;
}

@Component({
  selector: 'app-meat-market-prices',
  templateUrl: './meat-market-prices.component.html',
  styleUrls: ['./meat-market-prices.component.css']
})
export class MeatMarketPricesComponent implements OnInit {
  meats: Meat[] = []; // Array to hold generated meat data

  ngOnInit(): void {
    // Generate random meat data (adjust ranges and number of items as needed)
    for (let i = 0; i < 10; i++) { // Generate 10 random meats
      const randomPrice = Math.floor(Math.random() * 200) + 50; // Generate random price between 50 and 250 EGP
      this.meats.push({
        name: `Meat ${i + 1}`, // Simple names for demo
        price: randomPrice
      });
    }
  }
}
