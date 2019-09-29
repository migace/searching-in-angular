import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { File } from '../services/FilesService';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit, OnChanges {
  @Input() files: File[];
  _originalFilesList: File[];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {    
    this._originalFilesList = changes.files.currentValue.slice();
  }

  changeHandler(value) {
    this.files = this._originalFilesList.filter(
      file => file.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

}
