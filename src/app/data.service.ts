import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {Person} from './person';

@Injectable()
export class DataService {

  constructor(private http : Http) { 

  }

  getPeople() : Observable<Person[]>{
    return this.http.get('./../assets/sample.json').map((res:Response) => res.json());
  }

}
