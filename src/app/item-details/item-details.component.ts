import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
  itemId: string | undefined; // Assuming the item id is a string, adjust as needed

  constructor(private route: ActivatedRoute) {}

}
