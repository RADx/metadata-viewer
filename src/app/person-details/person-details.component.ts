import {Component, Input, OnInit} from '@angular/core';
import {PersonDetails} from "../person-details";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input()
  person? : PersonDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
