import { Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth/view/auth-page/auth-page.component';
import { HomePageComponent } from './modules/home/view/home-page/home-page.component';
import { SidebarPageComponent } from './modules/sidebar/view/sidebar-page/sidebar-page.component';
export const routes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path:'Auth',
        component: AuthPageComponent
    },
    {
        path:'Sidebar',
        component: SidebarPageComponent
    }
];
