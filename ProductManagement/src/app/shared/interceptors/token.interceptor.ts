import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authService.currentUser;
        if (this.authService.isLoggedIn() ) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${ this.authService.currentUserValue.authData}`
                }
            });
        }

        return next.handle(request);
    }
}