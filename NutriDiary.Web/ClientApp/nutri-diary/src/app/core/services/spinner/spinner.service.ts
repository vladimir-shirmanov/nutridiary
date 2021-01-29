import { Injectable } from '@angular/core';
import {SpinnerStore} from "./spinner.store";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinnerStore: SpinnerStore) { }

  setIsLoading(isLoading: boolean) {
    this.spinnerStore.update({isLoading: isLoading});
    setTimeout(_ => {
      this.spinnerStore.update({isLoading: false});
    }, 5000);
  }
}
