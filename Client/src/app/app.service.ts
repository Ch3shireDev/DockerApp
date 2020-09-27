import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<string> {
    return this.httpClient.get('http://localhost/api', { responseType: 'text' });
  }

}
