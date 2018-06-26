import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
products: Product[];
 
  constructor(private http : Http,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  
         this.http.get('http://localhost/api/product/read.php').map(res => res.json()).subscribe(products =>
                this.products=products
            );
   
  console.log(this.activeRoute.snapshot.params['id']);
  }

}
