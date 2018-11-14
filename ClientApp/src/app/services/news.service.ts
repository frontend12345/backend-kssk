import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {
  constructor(public http: HttpClient) { }

  getNews() {
    return this.http.get<any[]>("https://portal-kssk.herokuapp.com/api/News/last");
  };
}
