import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product.types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = "https://enigma-houdimarket-server-68399bf2f7b5.herokuapp.com/api/v1";

  constructor(private http: HttpClient) {}

  getCart(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}/cart`);
  }

  updateCart(products: Product[]): Observable<any> {
    return this.http.patch(`${this.apiUrl}/cart`, { products: products.map(product => {
      return {id: product.id}
    })});
  }
}