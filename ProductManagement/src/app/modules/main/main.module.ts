import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MainLayoutModule } from './main-layout/main-layout.module';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    MainLayoutModule
  ]
})
export class MainModule { }
