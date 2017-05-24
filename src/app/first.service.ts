import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';


@Injectable()
export class FirstService {
  private apiUrl ='https://tourhist.com/api/newapi/api.php?request=byid&id=295';

  constructor(private _http: Http) { }

  getMonument() {
    return this._http.get(this.apiUrl)
                     .map(res => res.json())  
  }

}
