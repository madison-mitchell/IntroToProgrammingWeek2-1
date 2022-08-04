import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectSongsLoaded } from "./state";


@Injectable()
export class CanActivateNew implements CanActivate {

  loaded$!: Observable<boolean>;
  constructor(private store: Store) {
    this.loaded$ = this.store.select(selectSongsLoaded)
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.loaded$;
  }

}
