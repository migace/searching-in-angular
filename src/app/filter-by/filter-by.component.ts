import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Filter } from './types';
import { Filetype } from '../services/FilesService';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent implements OnInit, OnChanges {
  @Input() filtersList: Filter[];
  @Output() selectedFilter = new EventEmitter<Filetype>();
  _allMediaFiler = {
    type: Filetype.Any,
    name: 'All media',
  };
  currentFilter: Filter = this._allMediaFiler;
  dropdownStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    changes.filtersList.currentValue.unshift(this._allMediaFiler);
  }

  dropdownClickHandler() {
    this.dropdownStatus = !this.dropdownStatus;
  }

  selectClickHandler(filetype: Filetype) {
    this.currentFilter = {
      type: filetype,
      name: this.filtersList.find(filter => filter.type === filetype).name
    };
    this.selectedFilter.emit(filetype);
  }
}
