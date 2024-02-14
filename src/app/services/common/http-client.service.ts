import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  get<T>(controller: string, action?: string, id?: string){
    let url = "";

    url = `${this.baseUrl}/${controller}/${action}`
  }

  post(){
    
  }

  put(){
    
  }

  delete(){
    
  }
}
