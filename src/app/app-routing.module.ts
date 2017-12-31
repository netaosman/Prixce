import { NgModule } from '@angular/core';

//Router
import { RouterModule, Routes } from '@angular/router';

//Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingComponent } from './components/setting/setting.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


//Create the app routes
const appRoutes: Routes = [
    // { path: '', component: DashboardComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        redirectTo: '/prixce/result',
        pathMatch: 'full'
    },
    {
        path: 'prixce',
        loadChildren: './pages/prixce/prixce.module#PrixceModule',
        data: { preload: true }
    },
    {
        path: 'market',
        loadChildren: './pages/market/market.module#MarketModule',
        data: { preload: true }
    },
    {
        path: 'value',
        loadChildren: './pages/vlaue/vlaue.module#ValueModule',
        data: { preload: true }
    },
    {
        path: 'clients',
        loadChildren: './pages/clients/clients.module#ClientsModule',
        data: { preload: true }
    },
    {
        path: 'costs',
        loadChildren: './pages/costs/costs.module#CostsModule',
        data: { preload: true }
    },
    {
        path: 'auth',
        loadChildren: './pages/auth/auth.module#AuthModule',
        data: { preload: true }
    },



]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
