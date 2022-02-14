import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NetworkService } from '../helpers/network.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkGuard implements CanActivate {
  constructor(private network: NetworkService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.network.online) {
      console.log(true);
      return true;
    }
    this.network.isNetworkStopped = true;
    this.router.navigate(['/offline']);
    return false;
  }
}
