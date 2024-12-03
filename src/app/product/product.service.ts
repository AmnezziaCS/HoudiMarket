import { Injectable } from '@angular/core';
import { Product } from './product.types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      title: 'M4A4 | Howl',
      price: 1800,
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
      id: 4,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Kmsj5MqnTmm5u7sR1j9bN_Iv9nBrs_0A-MWynIYXBJAJqY1iC-QLowefujcXtvJSYwHpmvnR3tHreyka_n1gSOd_hUi1h',
      stock: 4,
      category: 'knives',
      onStockMessage: false,
      outOfStock: false
    },
    {
      title: 'AK-47 | Gold arabesque',
      price: 800,
      id: 5,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09u5mIS0luX1Mb7Ch35U18h0juDU-MKjiQTnqEJpZm2lLIXHJwU8YQvX_Vjswuro1p64u5qayCZquyQl7HjdgVXp1puqHVel',
      stock: 4,
      category: 'riffles',
      onStockMessage: false,
      outOfStock: false
    },
    {
      title: 'Desert Eagle | Blaze',
      price: 800,
      id: 6,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XSwGkG65d1juqZp4rz3VLhrhc_azqhJtORdgM4YFvR-1C5wry5gpHqot2XnpVn5DmP',
      stock: 4,
      category: 'pistols',
      onStockMessage: false,
      outOfStock: false
    },
    {
      title: 'Glock-18 | Fade',
      price: 600,
      id: 7,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3dzxG6eO6nYeDg7n1a-6GkDoC7pMp3rGYpNqiiQ23-UM5ZT-hcIeQJgZsMFvR_lTox7i-m9bi6-pjfulG',
      stock: 4,
      category: 'pistols',
      onStockMessage: false,
      outOfStock: false
    },
    {
      title: 'USP-S | Kill Confirmed',
      price: 900,
      id: 8,
      photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYmugd9KRJlI_MAnY_AS3kOy9h5ftuMvPmiE2vSQm5S3ZmBXigk5Eavsv26LMgCO2Og',
      stock: 4,
      category: 'pistols',
      onStockMessage: false,
      outOfStock: false
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductByName(name: string): Product | undefined {
    return this.products.find(product => product.title.toLowerCase() === name.toLowerCase());
  }

  getProductByCategoryId(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }
}