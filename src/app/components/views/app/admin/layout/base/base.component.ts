import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from 'node_modules/@angular/router';

@Component({
  selector: 'app-admin-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class AdminBaseComponent implements OnInit {

  constructor(private router: Router) {

  }
  isSidebarRetracted = false;

  onSidebarToggle(retracted: boolean): void {
    this.isSidebarRetracted = retracted;
  }

  ngOnInit(): void {
  }

}
