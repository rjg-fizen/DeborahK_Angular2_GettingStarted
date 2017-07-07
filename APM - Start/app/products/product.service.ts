import { IProduct } from "./product";
import { Injectable } from "@angular/core";
//import { Http, Response } from "@angular/http";
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Http, Response } from "@angular/http";

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';
    
    getProducts(): Observable<IProduct[]> {
        let blah = this.http.get(this._productUrl);
       return this.http.get(this._productUrl)
               .map((response: Response) => <IProduct[]>response.json())
               .do(data => console.log('All: ' + JSON.stringify(data)));
    }   

    private handleError(error: Response){
       console.error(error);
       return Observable.throw(error.json().error || 'Server error');
    }

    constructor(private http: Http){
        
   }
}