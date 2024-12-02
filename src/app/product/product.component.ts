import { Component, Input } from '@angular/core';
import { Product } from './product.types';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [MatCardModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product


  onStockMessage = false;
  outOfStock = false;

  toggleButtonClick() {
    if (this.product.stock > 0) {

      console.log(this.product.title + "ajouté au panier");
      this.onStockMessage = !this.onStockMessage;
      this.product.stock -= 1;

      setTimeout(() => {
        this.onStockMessage = !this.onStockMessage;
      }, 2000);
    } else {
      this.outOfStock = true;
      setTimeout(() => {
        this.outOfStock = false;

      }, 2000);
    }
  }


}
