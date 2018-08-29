import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/toPromise';

let apiUrl = 'http://127.0.0.1:8000/api/';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(userData){
    let headers = new Headers();
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl, userData).subscribe(res => {
        console.log(res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getProducts() {
    //let headers = new Headers();
    return this.http.get( apiUrl );
  }

  getProductDetails(postfix, productData) {
    return this.http.get( apiUrl+postfix, productData );
  }

}
