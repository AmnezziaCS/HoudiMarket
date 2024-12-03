import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class ProductComponent implements OnInit, OnChanges {
  @Input({ required: true }) products!: Product[];
  @Input() selectedCategory: string = 'all';
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      this.filterByCategory(changes['selectedCategory'].currentValue);
    }
  }

  filterByCategory(category: string) {
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

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
      setTimeout(() => {
        product.outOfStock = false;
      }, 2000);
    }
  }
}