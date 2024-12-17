import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart/cart.service';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.types';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    imports: [ReactiveFormsModule, CommonModule],
})
export class OrderComponent implements OnInit {
    orderForm: FormGroup;
    loading = false;
    orderCompleted = false;

    constructor(
        private fb: FormBuilder,
        private cartService: CartService,
        private productService: ProductService,
    ) {
        this.orderForm = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            steamTradelink: ['', Validators.required],
            street: ['', Validators.required],
            city: ['', Validators.required],
            postalCode: ['', Validators.required],
            country: ['', Validators.required],
            deliveryMethod: ['', Validators.required],
            paymentMethod: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    onSubmit(): void {
        const country = this.orderForm.get('country')?.value;
        if (this.orderForm.valid && country?.toLowerCase() === 'france') {
            this.cartService.getCart().subscribe({
                next: (cart) => {
                    cart.products.forEach((product: Product) => {
                        this.productService
                            .updateProductStock(product.id, product.stock - 1)
                            .subscribe();
                    });
                    this.cartService.clearCart().subscribe({
                        next: () => {
                            this.orderCompleted = true;
                            this.orderForm.reset();
                        },
                    });
                },
            });
        } else {
            this.markAllFieldsAsTouched();
            if (country && country?.toLowerCase() !== 'france') {
                alert('Orders are only allowed for France.');
            }
        }
    }

    isFieldInvalid(field: string): boolean {
        const control = this.orderForm.get(field);
        return (control &&
            control.invalid &&
            (control.dirty || control.touched)) as boolean;
    }

    private markAllFieldsAsTouched(): void {
        Object.keys(this.orderForm.controls).forEach((field) => {
            const control = this.orderForm.get(field);
            if (control instanceof FormGroup) {
                this.markAllFieldsAsTouchedRecursive(control);
            } else {
                control?.markAsTouched({ onlySelf: true });
            }
        });
    }

    private markAllFieldsAsTouchedRecursive(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof FormGroup) {
                this.markAllFieldsAsTouchedRecursive(control);
            } else {
                control?.markAsTouched({ onlySelf: true });
            }
        });
    }
}
