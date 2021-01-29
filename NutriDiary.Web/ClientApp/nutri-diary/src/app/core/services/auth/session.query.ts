import {Injectable} from "@angular/core";
import {Query} from "@datorama/akita";
import {SessionState, SessionStore} from "./session.store";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {
  selectIsLogin$ = this.select('user').pipe(map(user => user!=null && !user.expired));
  authHeaderValue$ = this.select('user').pipe(map(user=>`${user.token_type} ${user.access_token}`));

  constructor(protected store: SessionStore) {
    super(store);
  }
}
