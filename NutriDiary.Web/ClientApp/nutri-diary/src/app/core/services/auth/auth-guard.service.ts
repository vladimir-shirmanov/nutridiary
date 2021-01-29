import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";
import {SessionQuery} from "./session.query";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private isLoggedIn: boolean;

  canActivate() {
    this.sessionQuery.selectIsLogin$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    if(this.isLoggedIn){
      return true;
    }

    this.authService.startAuthentication();
    return false;
  }

  constructor(private authService: AuthService, private sessionQuery: SessionQuery) { }
}
