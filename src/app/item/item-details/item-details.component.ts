import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  itemId!: string; // Assuming the item id is a string, adjust as needed
  selectedItem: any; // You can replace 'any' with the actual type of your item
  today = new Date();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve the item id from the route parameters
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
      // Now you can fetch the details of the item with this.itemId
      console.log('Item ID:', this.itemId);

      // For now, generate static mock data
      this.selectedItem = this.generateMockData(this.itemId);
    });
  }

  // Method to generate static mock data (replace with actual data fetching logic)
  private generateMockData(itemId: string): any {
    // Replace this with actual data fetching logic
    return {
      id: itemId,
      name: `Item ${itemId}`,
      price: Math.floor(Math.random() * 50) + 1,
      // Add other properties as needed
    };
  }
}
