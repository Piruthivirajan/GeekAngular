import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map' ;

@Injectable()
export class EventService {
constructor( private http:Http) { }


   addEvent(info){
   return this.http.post("https://geekm.herokuapp.com/events/",info).map(res => res.json());
  }
  
}