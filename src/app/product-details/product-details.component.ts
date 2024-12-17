import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.types';
import { PricePipe } from '../../pipes/price.pipe';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [PricePipe, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe(response => {
        this.product = response;
      });
    }
  }

  toggleButtonClick(product: Product, event: Event) {
    event.stopPropagation();
    if (product.stock > 0) {
      product.stock -= 1;
      product.showOnStockMessage = true;
      this.cartService.getCart().subscribe(cart => {
        this.cartService.updateCart([...cart.products, product]).subscribe();
      });
    } else {
      product.showOnStockMessage = false;
    }

    setTimeout(() => {
      product.showOnStockMessage = false
    }, 2000);
  }
}