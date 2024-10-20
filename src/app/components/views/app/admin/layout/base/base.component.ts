import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminSidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-admin-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class AdminBaseComponent implements OnInit, AfterViewInit {

  @ViewChild(AdminSidebarComponent) adminSidebar!: AdminSidebarComponent;
  isSidebarRetracted: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Inicializa el estado
    this.isSidebarRetracted = this.adminSidebar.isSidebarRetracted;
  }

  onSidebarStateChange(retracted: boolean): void {
    this.isSidebarRetracted = retracted; // Actualiza el estado
  }
}
