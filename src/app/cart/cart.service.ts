import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../product/product.types';
import { Cart } from './cart.types';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    apiUrl =
        'https://enigma-houdimarket-server-68399bf2f7b5.herokuapp.com/api/v1';

    constructor(private http: HttpClient) {}

    getCart(): Observable<{ products: Product[] }> {
        return this.http.get<{ products: Product[] }>(`${this.apiUrl}/cart`);
    }

    updateCart(products: Product[]): Observable<Cart> {
        return this.http.patch(`${this.apiUrl}/cart`, {
            products: products.reduce(
                (
                    acc: {
                        id: number;
                        quantity: number;
                    }[],
                    product,
                ) => {
                    const existingProduct = acc.find(
                        (p) => p.id === product.id,
                    );

                    if (existingProduct) {
                        acc[acc.indexOf(existingProduct)] = {
                            ...existingProduct,
                            quantity: existingProduct.quantity + 1,
                        };
                    } else {
                        acc.push({ ...product, quantity: 1 });
                    }

                    return acc;
                },
                [],
            ),
        }) as Observable<Cart>;
    }

    clearCart(): Observable<Cart> {
        return this.http.patch(`${this.apiUrl}/cart`, {
            products: [],
        }) as Observable<Cart>;
    }
}
