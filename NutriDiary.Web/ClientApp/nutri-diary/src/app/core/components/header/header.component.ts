import { Component, OnInit } from '@angular/core';
import {SessionQuery} from "../../services/auth/session.query";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {SpinnerService} from "../../services/spinner/spinner.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private sessionQuery: SessionQuery,
              private authService: AuthService,
              private router: Router,
              private spinnerService: SpinnerService) {
    this.isLoggedIn$ = sessionQuery.selectIsLogin$;
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.startAuthentication();
  }

  logout() {
    this.router.navigate(['login']);
    this.spinnerService.setIsLoading(true);
  }
}
