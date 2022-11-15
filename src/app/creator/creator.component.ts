import {Component, Input, OnInit} from '@angular/core';
import {DataFileCreatorsElement} from "../metadata";
import {PersonDetails} from "../person-details";
import {OrganizationDetails} from "../organization-details";

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  @Input()
  creatorElement? : DataFileCreatorsElement;

  constructor() { }

  ngOnInit(): void {
  }

  get personDetails() : PersonDetails {
    return {
      name : this.creatorElement?.["Creator Name"]?.["@value"],
      familyName : this.creatorElement?.["Creator Family Name"]?.["@value"],
      givenName : this.creatorElement?.["Creator Given Name"]?.["@value"],
      identifier : this.creatorElement?.["Creator Identifier"]?.["@value"],
      identifierScheme : this.creatorElement?.["Creator Identifier Scheme"]?.["@id"],
      role : this.creatorElement?.["Creator Role"]?.["rdfs:label"],
      affiliation : {
        name : this.creatorElement?.["Creator Affiliation"]?.["@value"],
        identifier : this.creatorElement?.["Creator Affiliation Identifier"]?.["@value"],
        identifierScheme : this.creatorElement?.["Creator Affiliation Identifier Scheme"]?.["@id"]
      }
    }
  }

  get organizationDetails() : OrganizationDetails {
    return {
      name : this.creatorElement?.["Creator Name"]?.['@value'],
      identifier : this.creatorElement?.["Creator Identifier"]?.['@value'],
      identifierScheme : this.creatorElement?.['Creator Identifier']?.["@value"],
      role : this.creatorElement?.['Creator Identifier']?.["@value"]
    }
  }

  get isPerson() : boolean {
    return this.creatorElement?.["Creator Type"]?.['@id'] === "http://vocab.fairdatacollective.org/gdmt/Person"
  }

  get hasId() {
    return this.personDetails.identifier !== undefined;
  }


}
