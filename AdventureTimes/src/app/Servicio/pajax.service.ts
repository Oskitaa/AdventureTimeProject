import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PajaxService {

  private urlEpisodes : String = environment.url;
  private key : String = environment.apiKey;

  constructor(private httpClient : HttpClient) { }

  getSeassons(){
    return this.httpClient.get(`${this.urlEpisodes}${this.key}`);
  }

  getEpidodesSeasons(id : number){
    return this.httpClient.get(`${this.urlEpisodes}/season/${id}${this.key}`);
  }

  getOneEpidode(idSeason : number, idEpisode : number){
    return this.httpClient.get(`${this.urlEpisodes}/season/${idSeason}/episode/${idEpisode}${this.key}`);
  }
}
