import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage:StorageService) { }

  ngOnInit() {
   let body = document.getElementsByTagName('body')[0];
        body.classList.add("skin-blue");
  console.log(this.storage.get('name'));
  }

}
