import { Component, OnDestroy } from '@angular/core';
import { FinderService } from 'src/app/finder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  subscription: Subscription;
  bookList: any;
  loading = false;

  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(private finderService: FinderService) {}

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  onSearch(input: string): void {
    this.loading = true;
    this.subscription = this.finderService
      .findBooks(input)
      .subscribe((books) => {
        console.log(books);
        if (books.docs.length) {
          console.log(this.loading);
          this.bookList = books.docs;
          console.log(this.bookList);
          this.loading = false;
          console.log(this.loading);
        }
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    // this.postList();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.postList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
