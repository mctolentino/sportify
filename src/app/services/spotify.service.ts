import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SpotifyService {

  constructor(public http: Http) {
  }

  searchByTrack(query: string) {
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL).map(res => res.json());
  }

}