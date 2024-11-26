import { Component } from '@angular/core';
import { Product } from './product.types';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  imports: [MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  protected product: Product = {
    id: 1,
    title: 'Dragon lore',
    price: 12000,
    description: 'A skin for the AWP sniper rifle',
    photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv2PrdSijAWwqkVtN272JIGdJw46YVrYqVO3xLy-gJC9u5vByCBh6ygi7WGdwUKTYdRD8A/360fx360f',
    stock: 10,
  }
}
