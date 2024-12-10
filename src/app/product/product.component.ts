import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from './product.types';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, CommonModule, PricePipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() selectedCategory: string = 'all';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  showOnStockMessage: boolean = false;
  showOutOfStockMessage: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products.data;
      this.filteredProducts = products.data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      this.filterByCategory(this.selectedCategory);
    }
  }

  filterByCategory(category: string) {
    if (category === 'all') {
      this.productService.getAllProducts().subscribe(products => {
        this.filteredProducts = products.data;
      });
    } else {
      this.productService.getProductByCategoryId(category).subscribe(products => {
        this.filteredProducts = products.data;
      });
    }
  }

  toggleButtonClick(product: Product) {
    if (product.stock > 0) {
      product.stock -= 1;
      this.showOnStockMessage = true;
      this.showOutOfStockMessage = false;
    } else {
      this.showOutOfStockMessage = true;
      this.showOnStockMessage = false;
    }

    setTimeout(() => {
      this.showOnStockMessage = false;
      this.showOutOfStockMessage = false;
    }, 2000);
  }
}