import { Component, OnInit } from '@angular/core';
import {SpinnerQuery} from "../../../core/services/spinner/spinner.query";
import {Observable} from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading$: Observable<boolean>;

  constructor(private spinnerQuery: SpinnerQuery) {
    this.isLoading$ = spinnerQuery.isLoading$;
  }

  ngOnInit(): void {
  }

}
