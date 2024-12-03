import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductComponent } from './product.component';
import { Product } from './product.types';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;
    let product: Product;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        product = {
            title: 'Test Product',
            price: 100,
            id: 1,
            stock: 10,
            photo: 'https://via.placeholder.com/150',
            category: 'test',
        };
        component.product = product;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display product title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.product-title')?.textContent).toContain(
            'Test Product',
        );
    });

    it('should toggle onStockMessage when product is added to cart', () => {
        component.toggleButtonClick();
        expect(component.onStockMessage).toBeTrue();
        setTimeout(() => {
            expect(component.onStockMessage).toBeFalse();
        }, 2000);
    });

    it('should decrease product stock when added to cart', () => {
        const initialStock = component.product.stock;
        component.toggleButtonClick();
        expect(component.product.stock).toBe(initialStock - 1);
    });

    it('should show outOfStock message when product stock is 0', () => {
        component.product.stock = 0;
        component.toggleButtonClick();
        expect(component.outOfStock).toBeTrue();
        setTimeout(() => {
            expect(component.outOfStock).toBeFalse();
        }, 2000);
    });
});
