import { Routes } from '@angular/router';
import { ProductList } from './Comp/product-list/product-list';
import { NotFound } from './Comp/not-found/not-found';
import { ProductDetial } from './Comp/product-detial/product-detial';
import { CreateProduct } from './Comp/create-product/create-product';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products/create', component: CreateProduct },
    { path: 'products', component: ProductList },
    { path: 'products/:id', component: ProductDetial },
    { path: '**', component: NotFound },  
];
