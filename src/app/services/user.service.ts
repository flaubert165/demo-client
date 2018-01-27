import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';
import {environment} from "../../environments/environment";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get(environment.serverUrl + '/user', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: string) {
    return this.http.get(environment.serverUrl + '/user/' + id.toString(), this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    /*console.log(JSON.stringify(user));*/
    return this.http.post(environment.serverUrl + '/user', user, this.jwt());
  }

  update(user: User) {
    return this.http.put(environment.serverUrl + '/user/' + user.id, user, this.jwt());
  }

  delete(id: string) {
    return this.http.delete(environment.serverUrl + '/user/' + id, this.jwt());
  }

  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.access_token) {
      let headers = new Headers({/*'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',*/ 'Authorization': 'Bearer ' + currentUser.access_token });
      return new RequestOptions({ headers: headers });
    }
  }
}
