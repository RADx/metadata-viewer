import {Component, Input, OnInit} from '@angular/core';
import {OrganizationDetails} from "../organization-details";

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {

  @Input()
  organizationDetails : OrganizationDetails = {};

  constructor() { }

  ngOnInit(): void {
  }

}
