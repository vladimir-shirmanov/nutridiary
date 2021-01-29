import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionStore} from "./session.store";
import {UserManager} from "oidc-client";
import {oidcSettings} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private manager = new UserManager(oidcSettings);

  constructor(private http: HttpClient,
              private sessionStore: SessionStore) {
    this.manager.getUser().then(user => {
      this.sessionStore.update({user});
    });
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user=>{
      this.sessionStore.update({user});
    });
  }
}
