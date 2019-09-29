import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeHandler(value) {
    this.searchChanged.emit(value);
  }
}
