import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected');
  }

  getData() {
    return this.http.get('https://')
               .map(res => res.json());
  }
}
