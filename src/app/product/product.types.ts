export interface Product {
    title: string;
    price: number;
    description: string;
    id: number;
    stock: number;
    photo: string;
    category: string;
    onStockMessage?: boolean;
    outOfStock?: boolean;
}
