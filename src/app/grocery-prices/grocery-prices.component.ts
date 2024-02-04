import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grocery-prices',
  templateUrl: './grocery-prices.component.html',
  styleUrls: ['./grocery-prices.component.css']
})
export class GroceryPricesComponent {
  groceryItems: any[] = [];
  today = new Date(); // Assuming you want to display today's date

  constructor(private router: Router) {
    this.generateRandomData();
  }

  onItemClick(item: any) {
    console.log('Item clicked:', item);
    item.isClicked = !item.isClicked;
    this.router.navigate(['/item-details', item.id]);
  }

  generateRandomData() {
    for (let i = 1; i <= 10; i++) {
      const newItem = {
        id: i,
        name: `Item ${i}`,
        price: `${Math.floor(Math.random() * 50) + 1} LE`,
        change: (Math.random() < 0.5 ? -1 : 1) * Number((Math.random() * 5).toFixed(2)),
        isClicked: false,
      };
      this.groceryItems.push(newItem);
    }
  }

  getColorClass(change: number): string {
    return change >= 0 ? 'green' : 'red';
  }


  getRandomIcon() {
    return Math.random() < 0.5 ? 'fa-arrow-up' : 'fa-arrow-down';
  }
}
