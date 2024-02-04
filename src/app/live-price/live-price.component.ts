import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  price: number;
  change: number;
}

@Component({
  selector: 'app-live-price',
  templateUrl: './live-price.component.html',
  styleUrls: ['./live-price.component.css']
})
export class LivePriceComponent implements OnInit {
  items: Item[] = [];

  ngOnInit() {
    this.generateRandomItems(); // Generate random items and changes
  }

  generateRandomItems(): void {
    const itemNames = ['لبن', 'لحم', 'دجاج', 'خبز', 'بطاطس', 'زيت', 'سكر', 'أرز', 'ملح', 'فول'];

    for (let i = 0; i < 50; i++) { // Generate 10 random items and changes
      const name = itemNames[Math.floor(Math.random() * itemNames.length)];
      const price = parseFloat((Math.random() * 100 + 10).toFixed(2)); // Round to 2 decimal places
      const change = Math.random() * 0.1 - 0.05; // Generate random change between -5% and 5%

      this.items.push({ name, price, change });
    }
  }
}

