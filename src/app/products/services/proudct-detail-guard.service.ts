import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';

@Injectable()
export class ProudctDetailGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.params.id;
    if (isNaN(id) || id < 1) {
        alert('Invalid product Id');
        // start a new navigation to redirect to list page
        this.router.navigate(['list']);
        // abort current navigation
        return false;
    }
    return true;
  }
}
