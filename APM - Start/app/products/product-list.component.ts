import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List!!";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    errorMessage: string;

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        console.log('finnin');
       this.productService.getProducts()
           .subscribe(products => this.products = products,
                       error => this.errorMessage = <any>error);
            
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string) {
        this.pageTitle = `Product List: ${message}`;
    }
}