import {Injectable} from "@angular/core";
import {Query} from "@datorama/akita";
import {SpinnerState, SpinnerStore} from "./spinner.store";

@Injectable({providedIn: 'root'})
export class SpinnerQuery extends Query<SpinnerState> {
  isLoading$ = this.select('isLoading');

  constructor(protected store: SpinnerStore) {
    super(store);
  }
}
