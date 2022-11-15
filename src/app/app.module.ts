import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentStudyElementComponent } from './parent-study-element/parent-study-element.component';
import { PhsIdentifierFieldComponent } from './phs-identifier-field/phs-identifier-field.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { AffiliationComponent } from './affiliation/affiliation.component';
import { CreatorComponent } from './creator/creator.component';
import { ContributorComponent } from './contributor/contributor.component';
import { FileNameComponent } from './file-name/file-name.component';
import { MetadataComponent } from './metadata/metadata.component';
import { LanguageComponent } from './language/language.component';
// import {MatDivider} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    ParentStudyElementComponent,
    PhsIdentifierFieldComponent,
    PersonDetailsComponent,
    OrganizationDetailsComponent,
    AffiliationComponent,
    CreatorComponent,
    ContributorComponent,
    FileNameComponent,
    MetadataComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
