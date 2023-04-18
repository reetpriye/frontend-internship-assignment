import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'front-end-internship-assignment-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  form: FormGroup;
  customSearch: string;

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.customSearch = 'Harry';
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required]),
    });

    // Emit search query 'harry' on initial render
    console.log(this.form);
    this.search.emit('harry');
  }

  onSubmit(): void {
    if (this.form.valid) {
      const searchInput = this.form.value.search;
      this.search.emit(searchInput);
    }
  }
}
