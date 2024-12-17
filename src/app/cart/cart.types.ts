import { Product } from '../product/product.types';

export interface Cart {
    products: Product[];
    id: string;
    createdAt: string;
    updatedAt: string;
}
