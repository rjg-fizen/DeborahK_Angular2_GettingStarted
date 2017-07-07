import { OnInit, Component } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'product-detail-component',
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle:string = "Product Detail";
    product: IProduct;

    constructor(private route: ActivatedRoute, private router: Router){
        console.log(this.route.snapshot.params['id']);
    }

    goBack() {
        this.router.navigate(["/products"]);
    }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

}