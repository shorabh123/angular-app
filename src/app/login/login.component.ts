import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';  
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {Router} from "@angular/router";
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  host:     {'[class.someClass]':'someField'}
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
 constructor(private http : Http,private router: Router,@Inject(SESSION_STORAGE) private storage:StorageService) { }

  ngOnInit() {
       let body = document.getElementsByTagName('body')[0];
        body.classList.add("login-page");
        
  }



    Register(regForm)
  {
   
    if(regForm.value.username=="")
    {
      document.getElementById("errorMsg").innerHTML='Please enter the username';
      return false;
    }
    else 
    if(regForm.value.password=="")
    {
      document.getElementById("errorMsg").innerHTML='Please enter the Password';
      return false;
    }
    else
    {
		var url = 'http://localhost/api/product/auth.php';
		var search = new URLSearchParams();
		search.set('username', regForm.value.username);
		search.set('password', regForm.value.password);
		this.http.get(url, {search: search}).subscribe((res)=>{
       var resSTR = JSON.stringify(res);
       var resJSON = JSON.parse(resSTR);
        var Objres  = JSON.parse(resJSON._body);
       if(Objres[0].id!='')
        {
         this.storage.set('name','shorabh sharma');
         this.router.navigateByUrl('dashboard');
        }
       
       });

		
    }

  }



   

}
