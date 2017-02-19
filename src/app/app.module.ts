import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule} from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {SpotifyService} from "./services/spotify.service";
import {Routes, RouterModule} from "@angular/router";
import {TrackComponent} from './track/track.component';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'tracks/:id', component: TrackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot()
  ],
  providers: [{
    provide: SpotifyService, useClass: SpotifyService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
