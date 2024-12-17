import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

import { PricePipe } from '../../pipes/price.pipe';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { Product } from './product.types';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [MatCardModule, CommonModule, PricePipe],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    @Input() selectedCategory: string = 'all';
    products = signal<Product[]>([]);
    filteredProducts: Product[] = [];

    constructor(
        private productService: ProductService,
        private router: Router,
        private cartService: CartService,
    ) { }

    ngOnInit() {
        this.productService.getAllProducts().subscribe((response) => {
            this.filteredProducts = response.data;
        });
    }

    onCategorySelected(category: string) {
        this.selectedCategory = category;
        if (category === 'all') {
            this.productService.getAllProducts().subscribe((products) => {
                this.filteredProducts = products.data;
            });
        } else {
            this.productService
                .getProductByCategoryId(category)
                .subscribe((products) => {
                    this.filteredProducts = products.products;
                });
        }
    }

    toggleButtonClick(product: Product, event: Event) {
        event.stopPropagation();
        if (product.stock > 0) {
            product.showOnStockMessage = true;
            this.cartService.getCart().subscribe((cart) => {
                this.cartService
                    .updateCart([...cart.products, product])
                    .subscribe();
            });
        } else {
            product.showOnStockMessage = false;
        }

        setTimeout(() => {
            product.showOnStockMessage = false;
        }, 2000);
    }

    viewProductDetails(productId: number) {
        this.router.navigate(['/product', productId]);
    }
}
