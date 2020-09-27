import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface Arp {
  urlToImage: string;
  title: Title;

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'ba295f8be41a4fb4bb4c55e84ef45823';
  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }





  constructor(
    private httpClient: HttpClient
  ) { }



  
}
