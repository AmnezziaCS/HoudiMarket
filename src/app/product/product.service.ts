import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.types';
import 'dotenv/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = process.env['API_URL'];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<{data: Product[]}> {
    return this.http.get<{data: Product[]}>(`${this.apiUrl}/products`);
  }

  getProductByCategoryId(categoryId: string): Observable<{data: Product[]}> {
    return this.http.get<{data: Product[]}>(`${this.apiUrl}/categories/${categoryId}`);
  }
}