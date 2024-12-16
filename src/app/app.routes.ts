import { Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
];
