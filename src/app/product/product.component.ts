import { Component, Input, OnInit, OnChanges, SimpleChanges, signal } from '@angular/core';
import { Product } from './product.types';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { PricePipe } from '../../pipes/price.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, CommonModule, PricePipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() selectedCategory: string = 'all';
  products = signal<Product[]>([]);
  filteredProducts: Product[] = [];
  showOnStockMessage: boolean = false;
  showOutOfStockMessage: boolean = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(response => {
      this.filteredProducts = response.data;
    });
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.productService.getAllProducts().subscribe(products => {
        this.filteredProducts = products.data;
      });
    } else {
      this.productService.getProductByCategoryId(category).subscribe(products => {
        this.filteredProducts = products.products;
      });
    }
  }

  toggleButtonClick(product: Product) {
    if (product.stock > 0) {
      product.stock -= 1;
      this.showOnStockMessage = true;
      this.showOutOfStockMessage = false;
    } else {
      this.showOnStockMessage = false;
      this.showOutOfStockMessage = true
    }

    setTimeout(() => {
      this.showOnStockMessage = false;
      this.showOutOfStockMessage = false;
    }, 2000);
  }

  viewProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}