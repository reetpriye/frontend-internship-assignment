import { Component } from '@angular/core';
import { FinderService } from 'src/app/finder.service';
import { Subscription } from 'rxjs';
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  subscription: Subscription;
  bookList: any;
  loading = false;
  searchText = '';

  constructor(private finderService: FinderService) {}

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  onSearch(input: string): void {
    this.searchText = input;
    this.loading = true;
    this.subscription = this.finderService
      .findBooks(input)
      .subscribe((books) => {
        console.log(books.docs);
        if (books.docs.length) {
          this.bookList = books.docs;
          this.loading = false;
        }
      });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
