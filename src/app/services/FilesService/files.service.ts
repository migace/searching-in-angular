import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { File } from './types';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private filesUrl = 'api/files';

  constructor(private http: HttpClient) { }

  getFiles(): Observable<File[]> {
    return this.http.get<File[]>(this.filesUrl)
  }
}
