import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Message[]> {
    return this.httpClient.get<Message[]>('http://localhost/api/');
  }

  public post(message:{content:string}){
    return this.httpClient.post('http://localhost/api/', message);
  }

}
