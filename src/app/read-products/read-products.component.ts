import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from '../post';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Router} from "@angular/router";
@Component({
    selector: 'app-read-products',
    templateUrl: './read-products.component.html',
    styleUrls: ['./read-products.component.css'],
})
 
export class ReadProductsComponent implements OnInit {
    // store list of products
    posts: Post[];
    public intro = 'Hello! Welcome to my blog. I am Serendipity. Here on this blog you will be able to find my photography work as well as everything I like across the internet world';
  // its just list data from here down
  public list = [
    {
      title: 'childless',
      children: []
    },
    {
      title: 'great grandparent',
      children: [
        {
          title: 'childless grandsibiling',
          children: []
        },
        {
          title: 'grandparent',
          children: [
            {
              title: 'childless sibiling',
              children: []
            },
            {
              title: 'another childless sibiling',
              children: []
            },
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
                {
                  title: 'another child',
                  children: []
                },
              ]
            },
            {
              title: 'another parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
              ]
            },
          ]
        },
        {
          title: 'another grandparent',
          children: [
            {
              title: 'parent1',
              children: [
                {
                  title: 'child',
                  children: [{
                  title: 'child2',
                  children: []
                }]
                },
                {
                  title: 'another child',
                  children: []
                },
                {
                  title: 'a third child',
                  children: []
                },
                {
                  title: 'teen mother',
                  children: [
                    {
                      title: 'accident',
                      children: []
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    },
  ];


    // initialize productService to retrieve list products in the ngOnInit()
    constructor(private http : Http,private router: Router){

    this.getdata();
    }
    ngOnInit() {
  }

 
    // methods that we will use later
    createProduct(){
     this.router.navigateByUrl('/create-product');
     }
    readOneProduct(id){
      this.router.navigateByUrl('/edit-product/'+id);
    }
    updateProduct(id){}
    deleteProduct(id){}
 
    // Read products from API.
    getdata(){
         this.http.get('http://localhost/api/product/getpost.php').map(res => res.json()).subscribe(posts =>
                this.posts=posts
            );
            
    }
}