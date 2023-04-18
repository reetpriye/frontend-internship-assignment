import { Component } from '@angular/core';
import { FinderService } from 'src/app/finder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
        if (books.docs.length) {
          this.bookList = books.docs;
          this.loading = false;
        }
      });
  }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.finderService
      .findBooks('Harry')
      .subscribe((books) => {
        if (books.docs.length) {
          this.bookList = books.docs;
          this.loading = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
