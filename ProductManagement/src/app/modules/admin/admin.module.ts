import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

export const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AdminLayoutComponent, canActivate: [AuthGuard] },

];

@NgModule({
  declarations: [ AdminLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ AdminLayoutComponent],
})
export class AdminModule { }
