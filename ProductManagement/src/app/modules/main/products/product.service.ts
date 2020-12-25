import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll() { // : Observable<any>
    return this.http.post(environment.loginUrl + 'products/getall', null).subscribe(x => {
      console.log(x);
    });
    // .pipe(
    //   map(prds => {
    //       console.log(prds);
    //       return prds;
    //   }));
  }
}
