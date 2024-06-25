import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InventaryComponent } from './inventary/inventary.component';
import { SoldComponent } from './sold/sold.component';
import { UnsoldComponent } from './unsold/unsold.component';

export const routes: Routes = [
    {
        path:'login',component:LoginComponent
    },
    {
        path:'reg',component:RegisterComponent
    },
    {
        path:'inventary',component:InventaryComponent,
        children:[{
            path:'sold',component:SoldComponent,
        },
    {
        path:'unsold',component:UnsoldComponent
    }]
    }
    ,
];
