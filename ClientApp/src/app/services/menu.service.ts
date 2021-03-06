import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MenuService {
  constructor(public http: HttpClient) { }

  getMenu() {
    return this.http.get<any[]>("https://portal-kssk.herokuapp.com/api/Menu/navigation");
  };
  
  getMenuByUrl(url: string) {
    return this.http.get<any[]>("https://portal-kssk.herokuapp.com/api/Menu/url"+url);
  };
  
  getLoadData() {
    return this.http.get<any[]>("https://portal-kssk.herokuapp.com/api/Menu/loadData");
  };
}
