import { Component, OnInit } from '@angular/core';

import { FilesService, File, Filetype } from './services/FilesService';
import { Filter } from './filter-by/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MediaLibrary';
  files: File[] = [];
  filtersList: Filter[] = [];

  constructor(private filesService: FilesService) {
    this.filtersList = [{
        type: Filetype.Audio,
        name: 'Audio',
      }, {
        type: Filetype.Document,
        name: 'Document',
      }, {
        type: Filetype.Image,
        name: 'Image',
      }, {
        type: Filetype.Video,
        name: 'Video',
      }];
  }

  ngOnInit() {
    this.filesService.getFiles().subscribe(data => this.files = data);
  }
}
