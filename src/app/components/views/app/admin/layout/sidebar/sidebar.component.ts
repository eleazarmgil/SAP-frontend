import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  isSidebarRetracted = false;
  showUsername = true;
  name = "Usuario"; // Cambiar esto al nombre real del usuario
  menuItems: MenuItem[] = [
    { label: 'Dashboard', link: '/dashboard', icon: 'home' },
    { label: 'Profile', link: '/admin/profile', icon: 'user' },
    { label: 'Settings', link: '/settings', icon: 'settings' },
    { label: 'Logout', link: '/logout', icon: 'log-out' },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarRetracted = !this.isSidebarRetracted;
  }
}
