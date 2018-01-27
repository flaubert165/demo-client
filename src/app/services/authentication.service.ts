import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = `username=${username}&password=${password}&grant_type=password&scope=read%20write&client_secret=123456&client_id=clientapp`;
    return this.http.post(environment.serverAuthUrl + '/oauth/token', body, {headers, withCredentials: true})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
