import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { DataBinding } from './components/data-binding/data-binding';
import { About } from './pages/about/about';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    {
        path: 'data-bindings',
        loadComponent: () => import('./components/data-binding/data-binding')
            .then(m => m.DataBinding)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about')
            .then(m => m.About)
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact-us/contact-us')
            .then(m => m.ContactUs)
    },
    { path: '**', redirectTo: 'home' }
];
