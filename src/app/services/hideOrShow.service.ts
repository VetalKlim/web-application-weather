import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideOrShowService {
  activeSearch = false;

  constructor() {
  }

  giveValueToDisplaySearch(search) {
    this.activeSearch = search;
    return this.activeSearch;
  }

  setValueToDisplaySearch(): boolean {
    return this.activeSearch;
  }

}
