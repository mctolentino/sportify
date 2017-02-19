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
import {LoginComponent} from './login/login.component';
import {ProtectedComponent} from './protected/protected.component';
import {LoggedInGuard} from "./guards/loggedIn.guard";
import {AUTH_PROVIDERS} from "./services/auth.service";

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'tracks/:id', component: TrackComponent, canActivate: [LoggedInGuard]},
  {
    path: 'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot()
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    {provide: SpotifyService, useClass: SpotifyService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
