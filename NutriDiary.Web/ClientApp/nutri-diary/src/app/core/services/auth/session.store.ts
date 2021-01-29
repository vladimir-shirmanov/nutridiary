import {Store, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {User} from "oidc-client";

export interface SessionState {
  user: User;
}

export function createInitialState(): SessionState {
  return {
    user: null
  };
}

@Injectable({providedIn: "root"})
@StoreConfig({name:'session'})
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
