import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../services/auth.constant';

@Injectable()
export class AuthenticationService {
  static AUTH_TOKEN = 'http://localhost:9966/api/auth/login';

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    const body = {"username":username,"password":password}
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');

    return this.http.post(AuthenticationService.AUTH_TOKEN, body, {headers})
      .map(res => res.json())
      .map((res: any) => {
        if (res.token) {
          return res.token;
        }
        return null;
      });
  }
}
