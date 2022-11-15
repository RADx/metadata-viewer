import {Component, Input, OnInit} from '@angular/core';
import {Affiliation} from "../affiliation";

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  @Input()
  affiliation? : Affiliation;

  constructor() { }

  ngOnInit(): void {
  }

}
