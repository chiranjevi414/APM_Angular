import {Component, OnInit} from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    // selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imgWidth: number = 50;
    imgMargin: number = 2;
    imgShow: boolean = false;
    listFilter: string = 'cart';
    products: Iproduct[] = [];

    constructor(private _productService: ProductService){

    }

    onRatingClicked(message: string){
        this.pageTitle = 'Product List: ' + message;
    }

    toggleImage(): void{

        this.imgShow = !this.imgShow;

    }

    ngOnInit(): void{
        console.log("onInit");
        this.products = this._productService.getProducts();
    }

}