import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'front-end-internship-assignment-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input()
  book: any;

  bookTitle: string;
  bookAuthors: string;

  constructor() {}

  ngOnInit(): void {
    this.bookTitle = this.book.title
      ? `${this.book.title.substring(0, 180)}...`
      : '...';
    this.bookAuthors = this.book.author_name
      ? this.book.author_name.join(', ')
      : '...';
  }
}
