import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products/:categoryId',
        component: ProductsCategoryComponentComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent 

    },
   
];
