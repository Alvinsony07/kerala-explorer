import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DistrictComponent } from './district/district.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: '',component: HomePageComponent
    },
    {
        path: 'district',component: DistrictComponent
    },
    {
        path: 'contact', component: ContactPageComponent
    },
    {
        path: 'district/:id', component: DetailPageComponent
    }
];
