import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  public isSidebarRetracted = false;
  showUsername = true;
  name = "Usuario"; // Cambiar esto al nombre real del usuario
  menuItems: MenuItem[] = [
    { label: 'Perfil', link: '/admin/profile', icon: 'settings' },
    { label: 'Control de Usuarios', link: '/admin/users', icon: 'user' },
    { label: 'Control de Contenido', link: '/admin/content', icon: 'settings' },
    { label: 'Cerrar Sesión', link: '/logout', icon: 'log-out' },
  ];

  @Output() sidebarStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarRetracted = !this.isSidebarRetracted;
    this.sidebarStateChanged.emit(this.isSidebarRetracted); // Emitir el nuevo estado
  }
}
