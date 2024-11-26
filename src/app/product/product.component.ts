import { Component, Input } from '@angular/core';
import { Product } from './product.types';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  imports: [MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product
}
