import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  loading = false;
  orderCompleted = false;

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router) {
    this.orderForm = this.fb.group({
      coordinates: ['', Validators.required],
      deliveryMethod: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.orderForm.valid) {
        this.cartService.clearCart().subscribe({
            next: () => {
                this.orderCompleted = true;
                this.orderForm.reset();
            }
        });
    }
}
}