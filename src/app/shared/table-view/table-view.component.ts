import { Component, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';

@Component({
  selector: 'front-end-internship-assignment-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() booksList: Book[] = [];
  @Input() subjectName = '';
  @Input() loading: boolean;

  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  start: number = 1;
  end: number = 10;

  ngOnInit() {}

  onTableDataChange(event: any) {
    this.page = event;
    this.start = (event - 1) * 10 + 1;
    this.end = Math.min(event * 10, this.booksList.length);
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
