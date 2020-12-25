import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsModule } from './products/products.module';

export const MAIN_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  // { path: '**', component: NotFoundComponent  }

];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MainLayoutModule,
    RouterModule,
    ProductsModule
  ]
})
export class MainModule { }
