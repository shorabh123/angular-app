import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';  
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {Router} from "@angular/router";
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-newleave',
  templateUrl: './newleave.component.html',
  styleUrls: ['./newleave.component.css']
})

@Injectable()

export class NewleaveComponent implements OnInit {

 constructor(private http : Http,private router: Router,@Inject(SESSION_STORAGE) private storage:StorageService) { }

  ngOnInit() {
  }
   Leaveregister(regForm)
  {
    	var url = 'http://localhost/leave/request.php';
		var search = new URLSearchParams();
		search.set('staff_id', regForm.value.staff_id);
		search.set('leave_id', regForm.value.leave_id);
		search.set('leave_start_date', regForm.value.leave_start_date);
		search.set('leave_end_date', regForm.value.leave_end_date);
		this.http.get(url, {search: search}).subscribe((res)=>{
       var resSTR = JSON.stringify(res);
       var resJSON = JSON.parse(resSTR);
        var Objres  = JSON.parse(resJSON._body);
        if(Objres.falg =='false')
         {
         document.getElementById("resmsg").innerHTML=Objres.error;
         }
        
      
       
       });

  }


}
