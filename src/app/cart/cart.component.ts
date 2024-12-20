import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule, FormsModule,
    FormControl
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

import { PricePipe } from '../../pipes/price.pipe';
import { Product } from '../product/product.types';
import { CartService } from './cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    imports: [ReactiveFormsModule, PricePipe, CommonModule, MatCardModule, FormsModule],
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cartForm: FormGroup;
    products: Product[] = [];
    loading = false;

    constructor(
        private fb: FormBuilder,
        private cartService: CartService,
        private router: Router,
    ) {
        this.cartForm = this.fb.group({
            products: this.fb.array([]),
            discountCode: new FormControl<string>(''),
        });
    }

    ngOnInit(): void {
        this.loadCart();
    }

    loadCart() {
        this.cartService.getCart().subscribe((cart) => {
            this.products = cart.products;
            this.cartForm.setControl(
                'products',
                this.fb.array(
                    this.products.map((product) => this.fb.group(product)),
                ),
            );
        });
    }

    updateCart() {
        this.cartService
            .updateCart(this.cartForm.value.products)
            .subscribe((response) => {
                console.log('Cart updated:', response);
            });
    }

    onSubmit() {
        console.log('Cart products:', this.cartForm.value.products);
    }

    removeProduct(index: number) {
        this.loading = true;
        const products = this.cartForm.get('products') as FormArray;
        products.removeAt(index);
        this.updateCart();
        this.loading = false;
    }

    get productsFormArray(): FormArray {
        return this.cartForm.get('products') as FormArray;
    }

    getTotal(): number {
        const multiplier = this.cartForm.value.discountCode === "HOUDIX" ? 0.9 : 1;

        return this.cartForm.value.products.reduce(
            (total: number, product: Product) => total + product.price * multiplier,
            0,
        );
    }

    confirmOrder(): void {
        this.router.navigate(['/order']);
    }
}
