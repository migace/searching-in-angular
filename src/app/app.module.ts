import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MockDataServiceService } from './services/MockDataService';
import { MediaListComponent } from './media-list/media-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterByComponent } from './filter-by/filter-by.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaListComponent,
    SearchBarComponent,
    FilterByComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockDataServiceService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
