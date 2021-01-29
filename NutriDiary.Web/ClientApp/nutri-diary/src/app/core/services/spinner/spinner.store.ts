import {Injectable} from "@angular/core";
import {Store, StoreConfig} from "@datorama/akita";

export interface SpinnerState {
  isLoading: boolean
}

export function createInitialState(): SpinnerState {
  return {
    isLoading: false
  };
}

@Injectable({providedIn: "root"})
@StoreConfig({name: "spinner"})
export class SpinnerStore extends Store<SpinnerState> {
  constructor() {
    super(createInitialState());
  }
}
