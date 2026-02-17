import { Routes } from '@angular/router';
import {Website} from "./layout/website/website";

export const routes: Routes = [
    {
        path: '',
        component: Website,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home').then(m => m.Home),
            },
            {
                path: 'about',
                loadComponent: () => import('./features/about/about').then(m => m.About),
            },
            {
                path: 'blog',
                loadComponent: () => import('./features/blog/blog').then(m => m.Blog),
            },
            {
                path: 'contact',
                loadComponent: () => import('./features/contact/contact').then(m => m.Contact),
            },
            {
                path: 'portfolio',
                loadComponent: () => import('./features/portfolio/portfolio').then(m => m.Portfolio),
            },
            {
                path: 'services',
                loadComponent: () => import('./features/services/services').then(m => m.Services),
            }
        ]
    }
];
