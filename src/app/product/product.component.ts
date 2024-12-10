import { Component, Input, OnInit, OnChanges, SimpleChanges, signal } from '@angular/core';
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
  products = signal<Product[]>([]);
  filteredProducts = signal<Product[]>([]);
  showOnStockMessage = signal<boolean>(false);
  showOutOfStockMessage = signal<boolean>(false);

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.products.set(products.data);
      this.filteredProducts.set(products.data);
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
        this.filteredProducts.set(products.data);
      });
    } else {
      this.productService.getProductByCategoryId(category).subscribe(products => {
        this.filteredProducts.set(products.data);
      });
    }
  }

  toggleButtonClick(product: Product) {
    if (product.stock > 0) {
      product.stock -= 1;
      this.showOnStockMessage.set(true);
      this.showOutOfStockMessage.set(false);
    } else {
      this.showOutOfStockMessage.set(true);
      this.showOnStockMessage.set(false);
    }

    setTimeout(() => {
      this.showOnStockMessage.set(false);
      this.showOutOfStockMessage.set(false);
    }, 2000);
  }
}