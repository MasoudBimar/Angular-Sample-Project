import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUser = null;

    /**
     *
     */
    constructor(private http: HttpClient) {

    }

    login(credentials) {
        return this.http.post('/api/autheticate', credentials).subscribe((result: any) => {
            if (true) { // successfully login
                localStorage.setItem('token', result.token);
                // this.currentUser = ;  set Current User
            } else {
                return null;
            }
        });
    }

    logout() {
        localStorage.removeItem('token');
        this.currentUser = null;
    }

    isLoggedIn(){
        // if logged in 
        return true;
        // else
        // return false;
    }

}