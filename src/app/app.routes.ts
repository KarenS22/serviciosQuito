import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "pages/operaciones",
        component: OperacionesComponent
    }
];
