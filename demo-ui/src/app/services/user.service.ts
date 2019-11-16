import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

import { TOKEN_NAME } from '../services/auth.constant';

declare var _: any;

@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;
  decodedToken: any;


  constructor() {
    const decodedToken = localStorage.lenght > 0 ?this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME)) : "";
    this.isAdmin = decodedToken.lenght > 0? decodedToken.scopes.some(el => el === 'USER'):false;
  }

  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    //console.log(decodedToken);

    this.isAdmin = decodedToken.scopes.some(el => el === 'USER');
    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }

  getUserPagesJWT(): any {
   return this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME));
  }
}