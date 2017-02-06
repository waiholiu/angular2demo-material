import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../data.service';
import {Person } from '../person';
import * as _ from 'underscore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  currPerson : Person;

  constructor( private route: ActivatedRoute, private router: Router, private dataService:DataService ){}

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = Number(id);
    })

    this.dataService.getPeople().subscribe(people =>
    this.currPerson = _.find(people, (p) => p.Id == this.id));
  }

}
