import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login',  component: LoginComponent},
  // { path: 'no-access',  component: NoAccessComponent},
  // { path: 'not-found',  component: NotFoundComponent},
  // { path: 'register',  component: RegisterComponent},
  // { path: '**', component: LoginComponent  }

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
