import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'front-end-internship-assignment-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input()
  book: any;
  @ViewChild('template', { static: true }) template;

  bookTitle: string;
  bookAuthors: string;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);

    this.bookTitle = this.book.title ? `${this.book.title}...` : '...';
    this.bookAuthors = this.book.author_name
      ? this.book.author_name.join(', ')
      : '...';
  }
}
