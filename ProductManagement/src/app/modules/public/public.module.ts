import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent},
  { path: 'no-access',  component: NoAccessComponent},
  { path: 'not-found',  component: NotFoundComponent},
  { path: 'register',  component: RegisterComponent},
  { path: 'home',  component: HomeComponent},
  { path: '**', component: LoginComponent  }

];


@NgModule({
  declarations: [LoginComponent, RegisterComponent, NoAccessComponent, NotFoundComponent, PublicLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PublicLayoutComponent]
})
export class PublicModule { }
