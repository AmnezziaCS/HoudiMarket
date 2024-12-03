import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.types';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HoudiMarket';
  fakeProducts: Product[] = [
    {
      title: 'M4A4 | Howl',
      price: 1800,
      description: 'The Howl is a Counter Strike: Global Offensive skin for the M4A4 rifle. It is one of the most expensive skins in the game, and is highly sought after by collectors.',
      id: 1,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ',
      stock: 4,
      category: 'riffles',
      onStockMessage: false,
      outOfStock: false
    },
    {
      title: 'Karambit | Doppler',
      price: 1500,
      description: 'The Doppler is a Counter Strike: Global Offensive skin for the Karambit knife. It is one of the most expensive skins in the game, and is highly sought after by collectors.',
      id: 2,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7j--YXygED6qUI9am_1IteTIwQ6M13S_gfoyefpgpXqtZSbyCdivnYq5ynfyUPhhgYMMLJI3Aal3g',
      stock: 4,
      category: 'knives',
      onStockMessage: false,
      outOfStock: false
    },
    {
      title: 'AWP | Dragon Lore',
      price: 2500,
      description: 'The Dragon Lore is a Counter Strike: Global Offensive skin for the AWP sniper rifle. It is one of the most expensive skins in the game, and is highly sought after by collectors.',
      id: 3,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv2PrdSijAWwqkVtN272JIGdJw46YVrYqVO3xLy-gJC9u5vByCBh6ygi7WGdwUKTYdRD8A',
      stock: 4,
      category: 'snipers',
      onStockMessage: false,
      outOfStock: false
    },
    {
      title: 'M9 Bayonet | Marble Fade',
      price: 1200,
      description: 'The Marble Fade is a Counter Strike: Global Offensive skin for the M9 Bayonet knife. It is one of the most expensive skins in the game, and is highly sought after by collectors.',
      id: 4,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Kmsj5MqnTmm5u7sR1j9bN_Iv9nBrs_0A-MWynIYXBJAJqY1iC-QLowefujcXtvJSYwHpmvnR3tHreyka_n1gSOd_hUi1h',
      stock: 4,
      category: 'knives',
      onStockMessage: false,
      outOfStock: false
    }
  ];
}