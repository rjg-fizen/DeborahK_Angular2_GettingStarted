import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductDetailGuard implements CanActivate {
    
    constructor(private router: Router){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let id = +route.url[1].path;

        if (isNaN(id) || id < 1){
            alert('Invalid product id');
            this.router.navigate(['/products']);
            return false;
        }

        return true;
    }

}