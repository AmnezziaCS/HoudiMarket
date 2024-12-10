import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://enigma-houdimarket-server-68399bf2f7b5.herokuapp.com/api/v1";

  constructor(private http: HttpClient) {}
  
  getAllProducts(): Observable<{data: Product[]}> {
    return this.http.get<{data: Product[]}>(`${this.apiUrl}/products`);
  }

  getProductByCategoryId(categoryId: string): Observable<{products: Product[]}> {
    return this.http.get<{products: Product[]}>(`${this.apiUrl}/categories/${categoryId}`);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }
}