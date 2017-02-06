import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import { Person } from '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myPeople:Person[];

  constructor(private router : Router, private dataService : DataService) { }
  ngOnInit() {
    this.dataService.getPeople().subscribe(people => this.myPeople = people);

  }

  onClickMe(){ 
    // this.router.navigateByUrl('/next');
    console.log(this.myPeople);
  }

}
