import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './helper/fakeBackendProvider';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { PublicModule } from './modules/public/public.module';
import { MainModule } from './modules/main/main.module';
import { AdminModule } from './modules/main/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublicModule,
    MainModule,
    AdminModule
  ],
  providers: [
    TokenInterceptor,
    fakeBackendProvider,
    ErrorInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
