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
        private router: Router,
    ) {
        this.orderForm = this.fb.group({
            city: ['', Validators.required],
            street: ['', Validators.required],
            zipCode: ['', Validators.required],
            country: ['', Validators.required],
            deliveryMethod: ['', Validators.required],
            paymentMethod: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    onSubmit(): void {
        if (this.orderForm.valid) {
            this.cartService.clearCart().subscribe({
                next: () => {
                    this.orderCompleted = true;
                    this.orderForm.reset();
                },
            });
        } else {
            this.markAllFieldsAsTouched();
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
            control?.markAsTouched({ onlySelf: true });
        });
    }
}
