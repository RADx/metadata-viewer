import {Affiliation} from "./affiliation";

export interface PersonDetails {

  name? : string | null | undefined;

  givenName? : string | null | undefined;

  familyName? : string | null | undefined;

  identifier? : string | null | undefined;

  identifierScheme? : string | null | undefined;

  role? : string | null | undefined;

  affiliation? : Affiliation;
}
