import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { PublicHeaderComponent } from './public-header/public-header.component';



@NgModule({
  declarations: [PublicFooterComponent, PublicHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class PublicLayoutModule { }
