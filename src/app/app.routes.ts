import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    /***Lazy Loading ****/
    {
        path: 'test',
        loadChildren: () => import('./test/test-routing.module').then(m => m.TestRoutingModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./product-module/product.module').then(m => m.ProductModule)
    },
    {
        path: 'a-propos',
        loadChildren: () => import('./apropos-module/apropos-module.module').then(m => m.AproposModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact-module/contact-module.module').then(m => m.ContactModuleModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile-module/profile-module.module').then(m => m.ProfileModuleModule)
    },


    /***Static Loading ****/


    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
 
    {
        path: 'home',
        component: ListCategoriesComponent,
        children: [
            {
                path: 'details/:id',
                component: DetailsCategoryComponent
            }
        ]
    },
    {
        path: 'products-category-qp',
        component: ProductsCategoryQPComponent
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
