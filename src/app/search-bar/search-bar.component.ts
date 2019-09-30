import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Input() search: string = '';
  @Output() searchChanged = new EventEmitter<string>();
  searchValue: string;

  ngOnInit() {
    this.searchValue = this.search;
  }

  ngOnChanges(changes) {
    this.searchValue = changes.search.currentValue;
  }

  change() {
    this.searchChanged.emit(this.searchValue);
  }
}
