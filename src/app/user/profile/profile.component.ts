import { Component, OnInit } from '@angular/core';
import { PurchaseItem } from 'src/app/models/purchaseItem.model';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  
  purchaseList: Array<PurchaseItem> = [];

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.purchaseService.getAllPurchaseItems().subscribe((data) => {
      this.purchaseList = data;
    });
  }
}
