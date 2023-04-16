import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'front-end-internship-assignment-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  form: FormGroup;

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const searchInput = this.form.value.search;
      console.log(searchInput);
      this.search.emit(searchInput);
    }
  }
}
