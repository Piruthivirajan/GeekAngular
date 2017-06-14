import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Event}  from './Event';

import * as firebase from 'firebase';
import { EventService} from './Event.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 
    constructor(public eventservice:EventService) {
        
    }
  model=new Event();
  
  addEvent(){
          this.eventservice.addEvent(this.model)
          .subscribe(Event =>{
            alert("Succesfully Registerd");
          });         
   return true;
  }
}
