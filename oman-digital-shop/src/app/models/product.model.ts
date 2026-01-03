

export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    stockQuantity: number;
    imageUrl?: string;
    isActive: boolean;
    categoryId: number;
    category?: Category;
}

export interface Category {
    id: number;
    name: string;
    description?: string;
    imageUrl?: string;
    isActive: boolean;
}