import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './modules/admin/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './modules/admin/admin.module';
import { LayoutComponent } from './modules/main/main-layout/layout.component';
import { MAIN_ROUTES } from './modules/main/main.module';
import { NotFoundComponent } from './modules/public/not-found/not-found.component';
import { PublicLayoutComponent } from './modules/public/public-layout/public-layout.component';
import { PUBLIC_ROUTES } from './modules/public/public.module';
import { AdminGuard } from './shared/guards/admin.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'public', component: PublicLayoutComponent, children: PUBLIC_ROUTES },
  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES, canActivate: [AdminGuard] },
  { path: 'main', component: LayoutComponent, children: MAIN_ROUTES, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
