import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';



@NgModule({
  declarations: [MainHeaderComponent, MainFooterComponent, MainSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class MainLayoutModule { }
