import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { DataBinding } from './components/data-binding/data-binding';
import { About } from './pages/about/about';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'data-bindings', component: DataBinding },
    { path: 'about', component: About},
    { path: 'contact-us', component: ContactUs},
    { path: '**', redirectTo: 'home' }
];
