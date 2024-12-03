import { Component, Input } from '@angular/core';
import { Product } from './product.types';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input({ required: true }) products!: Product[];

  toggleButtonClick(product: Product) {
    if (product.stock > 0) {
      console.log(product.title + " ajouté au panier");
      product.onStockMessage = true;
      product.stock -= 1;

      setTimeout(() => {
        product.onStockMessage = false;
      }, 2000);
    } else {
      product.outOfStock = true;
    }
  }
}