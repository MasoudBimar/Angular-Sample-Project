import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGurad } from 'src/app/shared/guards/auth.guard';

export const MAIN_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGurad]},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGurad] },
  // { path: '**', component: NotFoundComponent  }

];

@NgModule({
  declarations: [ProductsComponent, DashboardComponent],
  imports: [
    CommonModule,
    MainLayoutModule,
    AdminModule,
    RouterModule
  ]
})
export class MainModule { }
