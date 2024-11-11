import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
interface Content {
  id: number;
  name: string;
}

@Component({
  selector: 'app-read-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './read-content.component.html',
  styleUrl: './read-content.component.scss'
})
export class ReadContentComponent implements OnInit{

  contents: Content[] = [
    { id: 1, name: 'Trastorno por déficit de atención e hiperactividad'},
    { id: 2, name: 'Trastorno de la ansiedad' },
    { id: 3, name: 'Trastorno obsesivo-compulsivo'},
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewUser(content: Content): void {
    console.log('Ver usuario:', content);
  }

  deleteUser(contentID: number): void {
    this.contents = this.contents.filter(content => content.id !== contentID);
    console.log('Usuario eliminado con ID:', contentID);
  }

  addContent(){
    this.router.navigate(['admin', 'content', 'new']);
  }
}
