import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { get } from 'lodash';

import { Filter } from './types';
import { Filetype } from '../services/FilesService';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent implements OnChanges {
  @Input() filtersList: Filter[];
  @Input() currentFilter: Filter;
  @Output() selectedFilter = new EventEmitter<Filter>();
  _allMediaFilter = {
    type: Filetype.Any,
    name: 'All media',
  };
  _currentFilterSelected: Filter = this._allMediaFilter;
  _dropdownStatus: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (get(changes, 'filtersList', false)) {
      changes.filtersList.currentValue.unshift(this._allMediaFilter);    
    }

    if (get(changes, 'currentFilter.currentValue', false)) {
      this._currentFilterSelected = changes.currentFilter.currentValue;
    }
  }

  dropdownClickHandler() {
    this._dropdownStatus = !this._dropdownStatus;
  }

  selectClickHandler(filter: Filter) {
    this._currentFilterSelected = {
      type: filter.type,
      name: filter.name,
    };
    this.selectedFilter.emit(filter);
  }
}
