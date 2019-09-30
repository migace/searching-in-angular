import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { File, Filetype } from '../services/FilesService';
import { Filter } from '../filter-by/types';
import { defaultFilter } from './types';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css'],
})
export class MediaListComponent implements OnChanges {
  @Input() files: File[];
  @Input() filtersList: Filter[];
  public searchValue: string = '';
  currentFilter: Filter = defaultFilter;
  _currentSearchPhrase: string = '';
  _originalFilesList: File[];

  ngOnChanges(changes: SimpleChanges) {    
    this._originalFilesList = changes.files.currentValue.slice();
  }

  searchChanged(value) {
    if (value.length <= this._currentSearchPhrase.length) {
      this._currentSearchPhrase = value;
      this.selectedFilterHandler(this.currentFilter);      
    } else {
      this.searchByValue(value);
    }

    this.searchValue = value;
    this._currentSearchPhrase = value;
  }

  searchByValue(value) {
    if (value) {
      this.files = this.files.filter(
        file => file.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    }
  }

  selectedFilterHandler(filter: Filter) {
    this.currentFilter = filter;

    if (filter.type === Filetype.Any) {
      this.files = this._originalFilesList.slice();
    } else {
      this.files = this._originalFilesList.filter(file => file.type === filter.type);
    }

    if (this._currentSearchPhrase.length) {
      this.searchByValue(this._currentSearchPhrase);
    }    
  }

  clearHandler() {
    this.files = this._originalFilesList.slice();
    this.searchValue = '';
    this._currentSearchPhrase = '';
    this.currentFilter = defaultFilter;
  }

  trackByFiles(index, item) {
    return item.id;
  }
}
