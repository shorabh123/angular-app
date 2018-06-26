import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';  
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private http : Http,private router: Router) { }

  ngOnInit() {
  }

  Register(regForm)
  {
   if(regForm.value.productName=="")
   {
    alert('please enter the product name');
   }
   else
   {

	var url = 'http://localhost/api/product/create.php';
	var search = new URLSearchParams();
	search.set('name', regForm.value.productName);
	search.set('price', regForm.value.productPrice);
	search.set('description', regForm.value.produtdesc);
	search.set('category_id', regForm.value.catid);
	search.set('category_name', regForm.value.catname);
	this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));
	this.router.navigateByUrl('/home');


   }
  }

}
