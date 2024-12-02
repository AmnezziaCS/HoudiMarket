import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HoudiMarket';
  fakeProduct = [{
    title: 'M4A4 | Howl',
    price: 1800,
    description: 'The Howl is a Counter Strike: Global Offensive skin for the M4A4 rifle. It is one of the most expensive skins in the game, and is highly sought after by collectors.',
    id: 1,
    photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ/360fx360f',
    stock: 4,
    category: 'riffles'
  },
  {
    title: 'Karambit | Doppler',
    price: 1500,
    description: 'The Doppler is a Counter Strike: Global Offensive skin for the Karambit knife. It is one of the most expensive skins in the game, and is highly sought after by collectors.',
    id: 2,
    photo: 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7j--YXygED6qUI9am_1IteTIwQ6M13S_gfoyefpgpXqtZSbyCdivnYq5ynfyUPhhgYMMLJI3Aal3g/360fx360f',
    stock: 4,
    category: 'knives'
  }]
}
