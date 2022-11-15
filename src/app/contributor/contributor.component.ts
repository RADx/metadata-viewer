import {Component, Input, OnInit} from '@angular/core';
import {DataFileContributorsElement} from "../metadata";
import {PersonDetails} from "../person-details";
import {OrganizationDetails} from "../organization-details";

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css']
})
export class ContributorComponent implements OnInit {

  @Input()
  contributorElement? : DataFileContributorsElement;

  constructor() { }

  ngOnInit(): void {
  }

  get personDetails() : PersonDetails {
    return {
      name : this.contributorElement?.["Contributor Name"]?.["@value"],
      familyName : this.contributorElement?.["Contributor Family Name"]?.["@value"],
      givenName : this.contributorElement?.["Contributor Given Name"]?.["@value"],
      identifier : this.contributorElement?.["Contributor Identifier"]?.["@value"],
      identifierScheme : this.contributorElement?.["Contributor Identifier Scheme"]?.["@id"],
      role : this.contributorElement?.["Contributor Role"]?.["rdfs:label"],
      affiliation : {
        name : this.contributorElement?.["Contributor Affiliation"]?.["@value"],
        identifier : this.contributorElement?.["Contributor Affiliation Identifier"]?.["@value"],
        identifierScheme : this.contributorElement?.["Contributor Affiliation Identifier Scheme"]?.["@id"]
      }
    }
  }

  get organizationDetails() : OrganizationDetails {
    return {
      name : this.contributorElement?.["Contributor Name"]?.['@value'],
      identifier : this.contributorElement?.["Contributor Identifier"]?.['@value'],
      identifierScheme : this.contributorElement?.['Contributor Identifier']?.["@value"],
      role : this.contributorElement?.['Contributor Identifier']?.["@value"]
    }
  }

  get isPerson() : boolean {
    return this.contributorElement?.["Contributor Type"]?.['@id'] === "http://vocab.fairdatacollective.org/gdmt/Person"
  }

  get hasId() {
    return this.personDetails.identifier !== undefined;
  }

}
