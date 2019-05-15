import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadContentsService {
  post: any;
  url = 'https://www.reddit.com/';

  constructor(private http: HttpClient) {}

  getData(api_name: string, values?: string): Observable<any> {
    return this.http.get(`${this.url}/${api_name}?${values}`);
  }

 

}
