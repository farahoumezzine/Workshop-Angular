import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';

export const routes: Routes = [
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
