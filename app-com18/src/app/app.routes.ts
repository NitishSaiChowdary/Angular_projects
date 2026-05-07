import { Routes ,RouterModule} from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { RolesComponent } from './components/roles/roles.component';
import { DesignationComponent } from './components/designation/designation.component';

export const routes: Routes = [ 
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    } ,
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'client',
                component:ClientComponent,
                canActivate:[authGuard]
            },
            {
                path:'master',
                component:MasterComponent,
                canActivate:[authGuard]
            },
            {
                path:'employee',
                component:EmployeeComponent,
                canActivate:[authGuard]
            },
            {
                path:'update-client/:id',
                component:UpdateClientComponent,
                canActivate: [authGuard] 
            },
            {
                path:'register',
                component:RegisterComponent,
                canActivate: [authGuard] 
            },
            {
                path:'roles',
                component:RolesComponent,
                canActivate:[authGuard]
            },
            {
                path:'designation',
                component:DesignationComponent,
                canActivate:[authGuard]
            }
        ]
    }
    
  ];
