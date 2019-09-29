import { Component, OnInit } from '@angular/core';

import { FilesService, File } from './services/FilesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MediaLibrary';
  files: File[] = [];

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.filesService.getFiles().subscribe(data => this.files = data);
  }
}
