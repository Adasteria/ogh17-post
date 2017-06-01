import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';


@Injectable()
export class FirstService {
  private apiUrl ='http://localhost:4200/assets/hackathons-list.json';

  constructor(private _http: Http) { }

  getHackathons() {
    return this._http.get(this.apiUrl)
                     .map(res => res.json())  
  }

}
