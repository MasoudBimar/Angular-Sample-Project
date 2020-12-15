import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, NoAccessComponent, NotFoundComponent],
  imports: [
    CommonModule,
    PublicLayoutModule
  ]
})
export class PublicModule { }
