import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule} from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {SpotifyService} from "./services/spotify.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [{
    provide: SpotifyService, useClass: SpotifyService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
