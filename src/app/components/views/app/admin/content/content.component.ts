import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Content {
  id: number;
  name: string;
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  contents: Content[] = [
    { id: 1, name: 'Trastorno por déficit de atención e hiperactividad'},
    { id: 2, name: 'Trastorno de la ansiedad' },
    { id: 3, name: 'Trastorno obsesivo-compulsivo'},
  ];

  constructor() {}

  ngOnInit(): void {}

  viewUser(content: Content): void {
    console.log('Ver usuario:', content);
  }

  deleteUser(contentID: number): void {
    this.contents = this.contents.filter(content => content.id !== contentID);
    console.log('Usuario eliminado con ID:', contentID);
  }
}
