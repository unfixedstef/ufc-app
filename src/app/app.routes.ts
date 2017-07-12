import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardPageComponent} from "./components/pages/dashboard/page-dashboard.component";
import {ProfilPageComponent} from "./components/pages/profil/page-profil.component";
import {SearchPageComponent} from "./components/pages/search/page-search.component";
import {MainPageComponent} from "./components/pages/main/page-main.component";
import {MaintenancePageComponent} from "./components/pages/maintenance/page-maintenance.component";

const appRoutes: Routes = [
    {path: 'main', component: MainPageComponent},
    {path: 'dashboard', component: DashboardPageComponent},

    {path: 'search', component: SearchPageComponent},
    {path: 'profil', component: ProfilPageComponent},

    {path: 'maintenance', component: MaintenancePageComponent},

    {path: '**', redirectTo: 'main'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
