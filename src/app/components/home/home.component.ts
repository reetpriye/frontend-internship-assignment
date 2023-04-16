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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
