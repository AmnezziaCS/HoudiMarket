import { Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

export const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'order', component: OrderComponent },
    { path: 'terms-of-service', component: TermsOfServiceComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
