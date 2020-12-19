import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainHeaderComponent, MainFooterComponent, MainSidebarComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainHeaderComponent, MainFooterComponent, MainSidebarComponent, LayoutComponent],
})
export class MainLayoutModule { }
