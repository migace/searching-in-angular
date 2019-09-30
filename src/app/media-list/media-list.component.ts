import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { File, Filetype } from '../services/FilesService';
import { Filter } from '../filter-by/types';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnChanges {
  @Input() files: File[];
  @Input() filtersList: Filter[];
  _currentFiletypeFilter: Filetype;
  _currentSearchPhrase: string = '';
  _originalFilesList: File[];

  ngOnChanges(changes: SimpleChanges) {    
    this._originalFilesList = changes.files.currentValue.slice();
  }

  changeHandler(value) {
    if (value.length <= this._currentSearchPhrase.length) {
      this._currentSearchPhrase = value;
      this.selectedFilterHandler(this._currentFiletypeFilter);      
    } else {
      this.searchByValue(value);
    }

    this._currentSearchPhrase = value;
  }

  searchByValue(value) {
    if (value) {
      this.files = this.files.filter(
        file => file.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    }
  }

  selectedFilterHandler(filetype: Filetype) {
    this._currentFiletypeFilter = filetype;

    if (filetype === Filetype.Any) {
      this.files = this._originalFilesList.slice();
    } else {
      this.files = this._originalFilesList.filter(file => file.type == Filetype[filetype]);
      if (this._currentSearchPhrase.length) {
        this.searchByValue(this._currentSearchPhrase);
      }
    }
  }
}
