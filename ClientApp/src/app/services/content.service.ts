import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContentService {
  constructor(public http: HttpClient) { }

  getContentByType(url: string,type: string) {
    return this.http.get<any>("https://portal-kssk.herokuapp.com/api/Content/"+url+"/"+type); 
  }

  getLatestContentByUrl(url: string) {
    return this.http.get<any>("https://portal-kssk.herokuapp.com/api/Content/latest/"+url); 
  }
}
