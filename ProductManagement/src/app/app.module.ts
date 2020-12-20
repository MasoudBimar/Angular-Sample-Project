import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './helper/fakeBackendProvider';
import { AdminModule } from './modules/main/admin/admin.module';
import { MainModule } from './modules/main/main.module';
import { PublicModule } from './modules/public/public.module';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';


@NgModule({
  declarations: [
    AppComponent
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
