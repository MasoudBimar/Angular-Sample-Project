import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/public/home/home.component';
import { AdminLayoutComponent } from './modules/main/admin/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './modules/main/admin/admin.module';
import { LayoutComponent } from './modules/main/main-layout/layout.component';
import { MAIN_ROUTES } from './modules/main/main.module';
import { ProductsComponent } from './modules/main/products/products.component';
import { NotFoundComponent } from './modules/public/not-found/not-found.component';
import { PublicLayoutComponent } from './modules/public/public-layout/public-layout.component';
import { PUBLIC_ROUTES } from './modules/public/public.module';
import { AdminGurad } from './shared/guards/admin.guard';
import { AuthGurad } from './shared/guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'public', component: PublicLayoutComponent, children: PUBLIC_ROUTES },
  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES, canActivate: [AdminGurad] },
  { path: 'main', component: LayoutComponent, children: MAIN_ROUTES },
  { path: 'home', component: HomeComponent },
  
  // { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent }

];

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home',  component: HomeComponent},
//   { path: 'products',  component: ProductListComponent, canActivate: [AuthGuard] },
//   { path: 'login',  component: LoginComponent},

//   { path: '**', component: NotFoundComponent  }

// ];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
