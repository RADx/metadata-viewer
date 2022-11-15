import { Component, OnInit } from '@angular/core';
import { Metadata } from './metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'metadata-viewer';

  // metadata? : Metadata;

  metadata : Metadata = {
    "@context": {
      "Data File Titles": "http://purl.org/radx-terms/metadata-terms/titleDescriptor",
      "Data File Identity": "http://purl.org/radx-terms/metadata-terms/identityDescriptor",
      "Data File Language": "http://purl.org/radx-terms/metadata-terms/languageDescriptor",
      "Data File Subjects": "http://purl.org/radx-terms/metadata-terms/subjectsAndKeywordsDescriptor",
      "Data File Descriptions": "http://purl.org/radx-terms/metadata-terms/descriptionDescriptor",
      "Data File Data Dictionary": "http://purl.org/radx-terms/metadata-terms/dataDictionaryDescriptor",
      "Data File Creators": "http://purl.org/radx-terms/metadata-terms/creatorDescriptor",
      "Data File Related Resources": "http://purl.org/radx-terms/metadata-terms/relatedResourceDescriptor",
      "Data File Contributors": "http://purl.org/radx-terms/metadata-terms/contributorDescriptor",
      "Data File Rights": "http://purl.org/radx-terms/metadata-terms/rightsDescriptor",
      "Data File Dates": "http://purl.org/radx-terms/metadata-terms/eventsDescriptor",
      "Data File Parent Studies": "http://purl.org/radx-terms/metadata-terms/parentStudyDescriptor",
      "Data File Funding Sources": "http://purl.org/radx-terms/metadata-terms/fundingSourceDescriptor",
      "Data File Distributions": "http://purl.org/radx-terms/metadata-terms/distributionDescriptor",
      "Data Characteristics Summary": "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsDescriptor",
      "Data Sources": "http://purl.org/radx-terms/metadata-terms/dataSourceDescriptor",
      "Data Streams": "http://purl.org/radx-terms/metadata-terms/dataStreamDescriptor",
      "Data File Creation Processes": "http://purl.org/radx-terms/metadata-terms/dataFileCreationProcessDescriptor",
      "Data File Temporal Coverage": "http://purl.org/radx-terms/metadata-terms/temporalCoverageDescriptor",
      "Data File Spatial Coverage": "http://purl.org/radx-terms/metadata-terms/spatialCoverageDescriptor",
      "Data File Elevation Coverage": "http://purl.org/radx-terms/metadata-terms/elevationCoverageDescriptor",
      "Auxiliary Metadata": "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataDescriptor",
      "schema": "http://schema.org/",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "pav:createdOn": {
        "@type": "xsd:dateTime"
      },
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "pav:createdBy": {
        "@type": "@id"
      },
      "rdfs:label": {
        "@type": "xsd:string"
      },
      "oslc:modifiedBy": {
        "@type": "@id"
      },
      "skos:notation": {
        "@type": "xsd:string"
      },
      "schema:isBasedOn": {
        "@type": "@id"
      },
      "schema:description": {
        "@type": "xsd:string"
      },
      "pav:lastUpdatedOn": {
        "@type": "xsd:dateTime"
      },
      "schema:name": {
        "@type": "xsd:string"
      },
      "pav:derivedFrom": {
        "@type": "@id"
      }
    },
    "@id": "urn:uuid:a0da9a07-15b9-43fc-bf22-c99f7aa7bf46",
    "schema:name": "Example Metadata Instance",
    "schema:description": "Generated by CEDARCSV",
    "schema:isBasedOn": "urn:uuid:8bac82b0-f0b5-43e1-b13f-396d590f8148",
    "pav:createdOn": null,
    "pav:createdBy": null,
    "pav:lastUpdatedOn": null,
    "oslc:modifiedBy": null,
    "Data File Titles": [{
      "@id": "http://example.org/b0dab979-2a9d-4188-bc13-a800ca336622",
      "@context": {
        "Title": "http://purl.org/radx-terms/metadata-terms/title",
        "Language": "http://purl.org/radx-terms/metadata-terms/language"
      },
      "Title": {
        "@value": "Parent study title"
      },
      "Language": {
        "@value": "en"
      }
    }],
    "Data File Identity": {
      "@id": "http://example.org/dc600b8f-02ec-4279-ae34-3498c8d8f06b",
      "@context": {
        "Identifier": "http://purl.org/radx-terms/metadata-terms/identifier",
        "Identifier Type": "http://purl.org/radx-terms/metadata-terms/identifierType",
        "File Name ": "http://purl.org/radx-terms/metadata-terms/fileName",
        "Version": "http://purl.org/radx-terms/metadata-terms/version",
        "SHA256 digest": "https://purl.org/radx-terms/sha256"
      },
      "Identifier": {
        "@value": "http://doi.org/10.1000/182"
      },
      "Identifier Type": {
        "rdfs:label": "DOI",
        "@id": "http://vocab.fairdatacollective.org/gdmt/DOI"
      },
      "File Name ": {
        "@value": "COVID-19_Booster_Shot_June_2022_Responses.csv"
      },
      "Version": {
        "@value": "1.0.1"
      },
      "SHA256 digest": {
        "@value": "ebff8d3da88b292622d3bfc36bdac4c4537ddc56cb07f344c5223d6b6f9cd011"
      }
    },
    "Data File Language": {
      "@id": "http://example.org/460e480b-e428-4fe2-be93-2733bb36671b",
      "@context": {
        "Primary Language": "http://purl.org/radx-terms/metadata-terms/primaryLanguage",
        "Other Languages": "http://purl.org/radx-terms/metadata-terms/otherLanguage"
      },
      "Primary Language": {
        "@value": "en"
      },
      "Other Languages": [{
        "@value": "es"
      }, {
        "@value": "de"
      }]
    },
    "Data File Subjects": [{
      "@id": "http://example.org/49aea49e-d38b-4990-bbdb-b4bc7ecaf1e6",
      "@context": {
        "Subject Identifier": "http://purl.org/radx-terms/metadata-terms/subjectIdentifier",
        "Subject Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/subjectIdentifierScheme",
        "Keyword": "http://purl.org/radx-terms/metadata-terms/keyword"
      },
      "Subject Identifier": {
        "rdfs:label": "COVID-19 vaccine booster shot",
        "@id": "http://purl.bioontology.org/ontology/MESH/C000719227"
      },
      "Subject Identifier Scheme": {
        "@value": "http://purl.bioontology.org/ontology/MESH"
      },
      "Keyword": {
        "@value": "COVID-19 vaccine booster shot"
      }
    }],
    "Data File Descriptions": [{
      "@id": "http://example.org/8a0189c8-bcb1-47db-ad11-6f285994c67e",
      "@context": {
        "Description": "http://purl.org/radx-terms/metadata-terms/description",
        "Description Language": "http://purl.org/radx-terms/metadata-terms/language",
        "Type Of Content": "http://purl.org/radx-terms/metadata-terms/typeOfContent"
      },
      "Description": {
        "@value": "This dataset provides responses from a survey carried out in June 2022 whose purpose was to ascertain side-effects of receiving the COVID-19 booster shot."
      },
      "Description Language": {
        "@value": "en"
      },
      "Type Of Content": {
        "rdfs:label": "Dataset",
        "@id": "http://vocab.fairdatacollective.org/gdmt/Dataset"
      }
    }],
    "Data File Data Dictionary": {
      "@id": "http://example.org/1d3d1efa-dfd9-4fb1-bcb5-9c3e686fe638",
      "@context": {
        "Data Dictionary File Name": "http://purl.org/radx-terms/metadata-terms/dataDictionaryFileName"
      },
      "Data Dictionary File Name": {
        "@value": "COVID-19_Booster_Shot_June_2022_Responses--DICT.csv"
      }
    },
    "Data File Creators": [{
      "@id": "http://example.org/60582f2b-b48e-422b-be61-f3d14ddec91e",
      "@context": {
        "Creator Type": "http://purl.org/radx-terms/metadata-terms/creatorType",
        "Creator Name": "http://purl.org/radx-terms/metadata-terms/creatorName",
        "Creator Given Name": "http://purl.org/radx-terms/metadata-terms/creatorGivenName",
        "Creator Family Name": "http://purl.org/radx-terms/metadata-terms/creatorFamilyName",
        "Creator Identifier": "http://purl.org/radx-terms/metadata-terms/creatorIdentifier",
        "Creator Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/creatorIdentifierScheme",
        "Creator Email": "http://purl.org/radx-terms/metadata-terms/creatorEmail",
        "Creator Affiliation": "http://purl.org/radx-terms/metadata-terms/creatorAffiliation",
        "Creator Affiliation Identifier": "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifier",
        "Creator Affiliation Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifierScheme",
        "Creator Role": "http://purl.org/radx-terms/metadata-terms/creatorRole"
      },
      "Creator Type": {
        "rdfs:label": "Person",
        "@id": "http://vocab.fairdatacollective.org/gdmt/Person"
      },
      "Creator Name": {
        "@value": "Josiah Carberry"
      },
      "Creator Given Name": {
        "@value": "Josiah"
      },
      "Creator Family Name": {
        "@value": "Carberry"
      },
      "Creator Identifier": {
        "@value": "https://orcid.org/0000-0002-1825-0097"
      },
      "Creator Identifier Scheme": {
        "rdfs:label": "ORCID",
        "@id": "https://orcid.org/"
      },
      "Creator Email": {
        "@value": "josiah.carberry@example.com"
      },
      "Creator Affiliation": {
        "@value": "Brown University"
      },
      "Creator Affiliation Identifier": {
        "@value": "https://ror.org/05gq02987"
      },
      "Creator Affiliation Identifier Scheme": {
        "rdfs:label": "ROR",
        "@id": "https://ror.org"
      },
      "Creator Role": {
        "rdfs:label": "Data Manager",
        "@id": "http://vocab.fairdatacollective.org/gdmt/ProjectLeader"
      }
    }],
    "Data File Related Resources": [{
      "@id": "http://example.org/dab02e77-5d7c-437c-b08e-3d9a7fce2b44",
      "@context": {
        "Related Resource Identifier": "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifier",
        "Related Resource Identifier Type": "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifierType",
        "Related Resource File Name": "http://purl.org/radx-terms/metadata-terms/relatedResourceFileName",
        "Related Resource Type Category": "http://purl.org/radx-terms/metadata-terms/relatedResourceTypeCategory",
        "Related Resource Relation": "http://purl.org/radx-terms/metadata-terms/relatedResourceRelation"
      },
      "Related Resource Identifier": {
        "@value": null
      },
      "Related Resource Identifier Type": {},
      "Related Resource File Name": {
        "@value": null
      },
      "Related Resource Type Category": {
        "rdfs:label": "Text",
        "@id": "http://vocab.fairdatacollective.org/gdmt/Text"
      },
      "Related Resource Relation": {
        "@value": "The publication describes how the data file is constructed and can be used."
      }
    }],
    "Data File Contributors": [{
      "@id": "http://example.org/d55e8c6c-25dd-4974-bd7a-8f4746b9edf1",
      "@context": {
        "Contributor Type": "http://purl.org/radx-terms/metadata-terms/contributorType",
        "Contributor Name": "http://purl.org/radx-terms/metadata-terms/contributorName",
        "Contributor Given Name": "http://purl.org/radx-terms/metadata-terms/contributorGivenName",
        "Contributor Family Name": "http://purl.org/radx-terms/metadata-terms/contributorFamilyName",
        "Contributor Identifier": "http://purl.org/radx-terms/metadata-terms/contributorIdentifier",
        "Contributor Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/contributorIdentifierScheme",
        "Contributor Affiliation": "http://purl.org/radx-terms/metadata-terms/contributorAffiliation",
        "Contributor Affiliation Identifier": "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifier",
        "Contributor Affiliation Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifierScheme",
        "Contributor Email": "http://purl.org/radx-terms/metadata-terms/contributorEmail",
        "Contributor Role": "http://purl.org/radx-terms/metadata-terms/contributorRole"
      },
      "Contributor Type": {
        "rdfs:label": "Person",
        "@id": "http://vocab.fairdatacollective.org/gdmt/Person"
      },
      "Contributor Name": {
        "@value": "Josiah Carberry"
      },
      "Contributor Given Name": {
        "@value": "Josiah"
      },
      "Contributor Family Name": {
        "@value": "Carberry"
      },
      "Contributor Identifier": {
        "@value": "https://orcid.org/0000-0002-1825-0097"
      },
      "Contributor Identifier Scheme": {
        "rdfs:label": "ORCID",
        "@id": "https://orcid.org"
      },
      "Contributor Affiliation": {
        "@value": "Brown University"
      },
      "Contributor Affiliation Identifier": {
        "@value": "https://ror.org/05gq02987"
      },
      "Contributor Affiliation Identifier Scheme": {
        "rdfs:label": "ROR",
        "@id": "https://ror.org"
      },
      "Contributor Email": {
        "@value": "josiah.carberry@example.com"
      },
      "Contributor Role": {
        "rdfs:label": "Data Collector",
        "@id": "http://vocab.fairdatacollective.org/gdmt/DataCollector"
      }
    }],
    "Data File Rights": [{
      "@id": "http://example.org/788413ce-04e8-438e-9aca-181023eed287",
      "@context": {
        "License Name": "http://purl.org/radx-terms/metadata-terms/licenseName",
        "License Text": "http://purl.org/radx-terms/metadata-terms/licenseText"
      },
      "License Name": {
        "rdfs:label": "CC BY-SA 4.0",
        "@id": "http://vocab.fairdatacollective.org/gdmt/CCBYSA4.0"
      },
      "License Text": {
        "@value": null
      }
    }],
    "Data File Dates": [{
      "@id": "http://example.org/178967ec-4eb2-44bb-bc65-fcd30719e58f",
      "@context": {
        "Event Type": "http://purl.org/radx-terms/metadata-terms/eventType",
        "Date": "http://purl.org/radx-terms/metadata-terms/eventDate"
      },
      "Event Type": {
        "rdfs:label": "Created",
        "@id": "http://vocab.fairdatacollective.org/gdmt/Created"
      },
      "Date": {
        "@type": "xsd:dateTime",
        "@value": "2022-11-23T01:23:45.678-07:00"
      }
    }],
    "Data File Parent Studies": [{
      "@id": "http://example.org/ab0c59fa-dba2-4f14-894d-999391512085",
      "@context": {
        "PHS Identifier": "http://purl.org/radx-terms/metadata-terms/parentStudyPhsIdentifier",
        "Study Identifier": "http://purl.org/radx-terms/metadata-terms/ParentStudyIdentifier",
        "Study Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/parentStudyIdentifierScheme",
        "Study Name": "http://purl.org/radx-terms/metadata-terms/parentStudyName",
        "Study Start Date": "http://purl.org/radx-terms/metadata-terms/startDate",
        "Study End Date": "http://purl.org/radx-terms/metadata-terms/endDate"
      },
      "PHS Identifier": {
        "@value": "phs000296"
      },
      "Study Identifier": {
        "@value": "https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000296"
      },
      "Study Identifier Scheme": {
        "rdfs:label": "IRI",
        "@id": "http://vocab.fairdatacollective.org/gdmt/IRI"
      },
      "Study Name": {
        "@value": null
      },
      "Study Start Date": {
        "@type": "xsd:dateTime",
        "@value": "2021-10-05"
      },
      "Study End Date": {
        "@type": "xsd:dateTime",
        "@value": "2022-10-05"
      }
    }],
    "Data File Funding Sources": [{
      "@id": "http://example.org/8e7a44f3-5f1e-4314-a15b-2cd3c5b00ee2",
      "@context": {
        "Award Title": "http://purl.org/radx-terms/metadata-terms/awardTitle",
        "Award Page URL": "http://purl.org/radx-terms/metadata-terms/awardPageUrl",
        "Award Local Identifier": "http://purl.org/radx-terms/metadata-terms/awardIdentifier",
        "Funder Name": "http://purl.org/radx-terms/metadata-terms/funderName",
        "Funder Identifier": "http://purl.org/radx-terms/metadata-terms/funderIdentifier",
        "Funder Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/funderIdentifierScheme"
      },
      "Award Title": {
        "@value": "Safer At School Early Alert (SASEA)"
      },
      "Award Page URL": {
        "@id": "https://reporter.nih.gov/search/44g5CsIy-EGIvKlnlFwXrA/project-details/10447530"
      },
      "Award Local Identifier": {
        "@value": "1U01HD108787-01"
      },
      "Funder Name": {
        "@value": "Eunice Kennedy Shriver National Institute of Child Health and Human Development"
      },
      "Funder Identifier": {
        "@value": "https://ror.org/04byxyr05"
      },
      "Funder Identifier Scheme": {
        "rdfs:label": "ROR",
        "@id": "https://ror.org"
      }
    }],
    "Data File Distributions": [{
      "@id": "http://example.org/61e7ba8e-20ee-4ee3-a51b-15b7b4c7c085",
      "@context": {
        "Distribution Publisher": "http://purl.org/radx-terms/metadata-terms/distributionPublisher",
        "Distribution Publisher Identifier": "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifier",
        "Distribution Publisher Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifierScheme",
        "Distribution Identifier": "http://purl.org/radx-terms/metadata-terms/distributionIdentifier",
        "Distribution Identifier Type": "http://purl.org/radx-terms/metadata-terms/distributionIdentifierType",
        "Distribution Format": "http://purl.org/radx-terms/metadata-terms/distributionFormat",
        "Distribution Media Type": "http://purl.org/radx-terms/metadata-terms/distributionMediaType",
        "Distribution Size": "http://purl.org/radx-terms/metadata-terms/distributionSizeInBytes",
        "Distribution Access Protocol": "http://purl.org/radx-terms/metadata-terms/distributionAccessProtocol",
        "Distribution Access Configuration": "http://purl.org/radx-terms/metadata-terms/distributionAccessConfiguration",
        "Distribution Query Statement": "http://purl.org/radx-terms/metadata-terms/distributionQueryStatement",
        "Data File Publication Date": "http://purl.org/radx-terms/metadata-terms/distributionPublicationDescriptor"
      },
      "Distribution Publisher": {
        "@value": null
      },
      "Distribution Publisher Identifier": {},
      "Distribution Publisher Identifier Scheme": {},
      "Distribution Identifier": {
        "@value": null
      },
      "Distribution Identifier Type": {},
      "Distribution Format": {
        "@value": null
      },
      "Distribution Media Type": {},
      "Distribution Size": {
        "@value": null
      },
      "Distribution Access Protocol": {
        "@value": null
      },
      "Distribution Access Configuration": {
        "@value": null
      },
      "Distribution Query Statement": {
        "@value": null
      },
      "Data File Publication Date": {
        "@id": "http://example.org/b21db11c-e147-455f-9723-d6c34a8927d5",
        "@context": {
          "Data File Publication Date": "http://purl.org/radx-terms/metadata-terms/distributionPublicationDate",
          "Publication Date Type": "http://purl.org/radx-terms/metadata-terms/distributionPublicationDateType"
        },
        "Data File Publication Date": {
          "@type": "xsd:dateTime",
          "@value": null
        },
        "Publication Date Type": {
          "@value": "http://vocab.fairdatacollective.org/gdmt/Published"
        }
      }
    }],
    "Data Characteristics Summary": {
      "@id": "http://example.org/cfbbc606-5308-4c2c-bad5-546a51bb9502",
      "@context": {
        "Data Characteristics Table in HTML": "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInHtml",
        "Data Characteristics Table in CSV": "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInCsv",
        "Data Characteristics Table in TSV": "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInTsv",
        "Data Characteristics Table in Key-Value Pairs": "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInKeyValuePairs"
      },
      "Data Characteristics Table in HTML": {
        "@value": null
      },
      "Data Characteristics Table in CSV": {
        "@value": null
      },
      "Data Characteristics Table in TSV": {
        "@value": null
      },
      "Data Characteristics Table in Key-Value Pairs": [""]
    },
    "Data Sources": [{
      "@id": "http://example.org/bdeb12bf-036a-4e66-b295-feffed6cd1c9",
      "@context": {
        "Data Source Name": "http://purl.org/radx-terms/metadata-terms/dataSourceName",
        "Data Source Identifier": "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifier",
        "Data Source Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifierScheme"
      },
      "Data Source Name": {
        "@value": ""
      },
      "Data Source Identifier": {
        "@value": null
      },
      "Data Source Identifier Scheme": {}
    }],
    "Data Streams": [{
      "@id": "http://example.org/903204de-cead-4a58-8150-5905fdf104d0",
      "@context": {
        "Data Stream Name": "http://purl.org/radx-terms/metadata-terms/dataStreamName",
        "Data Stream Identifier": "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifier",
        "Data Stream Identifier Scheme": "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifierScheme",
        "Data Stream Variable Names": "http://purl.org/radx-terms/metadata-terms/dataStreamVariableName",
        "Data Stream Data Source Identifier": "http://purl.org/radx-terms/metadata-terms/dataStreamDataSourceIdentifier"
      },
      "Data Stream Name": {
        "@value": null
      },
      "Data Stream Identifier": {
        "@value": null
      },
      "Data Stream Identifier Scheme": {},
      "Data Stream Variable Names": [{
        "@value": null
      }],
      "Data Stream Data Source Identifier": {
        "@value": null
      }
    }],
    "Data File Creation Processes": [{
      "@id": "http://example.org/718fa378-2094-4972-88a1-27de7a08c5d8",
      "@context": {
        "Process Name": "http://purl.org/radx-terms/metadata-terms/creationProcessName",
        "Process IRI": "http://purl.org/radx-terms/metadata-terms/creationProcessIri",
        "Process Version": "http://purl.org/radx-terms/metadata-terms/creationProcessVersion",
        "Process Execution Identifier": "http://purl.org/radx-terms/metadata-terms/creationProcessExecutionIdentifier"
      },
      "Process Name": {
        "@value": null
      },
      "Process IRI": {
        "@value": null
      },
      "Process Version": {
        "@value": null
      },
      "Process Execution Identifier": {
        "@value": null
      }
    }],
    "Data File Temporal Coverage": [{
      "@id": "http://example.org/e0ba9abf-e024-41e8-b83d-429a8c687592",
      "@context": {
        "Temporal Extent Minimum Value": "http://purl.org/radx-terms/metadata-terms/temporalExtentMinimumValue",
        "Temporal Extent Maximum Value": "http://purl.org/radx-terms/metadata-terms/temporalExtentMaximumValue",
        "Temporal Resolution": "http://purl.org/radx-terms/metadata-terms/temporalResolution",
        "Duration": "http://purl.org/radx-terms/metadata-terms/temporalCoverageDuration"
      },
      "Temporal Extent Minimum Value": {
        "@type": "xsd:dateTime",
        "@value": "2022-06-01"
      },
      "Temporal Extent Maximum Value": {
        "@type": "xsd:dateTime",
        "@value": "2022-06-29"
      },
      "Temporal Resolution": {
        "@value": "3600"
      },
      "Duration": {
        "@value": "P8DT1.5H"
      }
    }],
    "Data File Spatial Coverage": [{
      "@id": "http://example.org/30b47f59-3d32-4b0a-81ac-fa61b71bfe3d",
      "@context": {
        "Bounding Boxes": "http://purl.org/radx-terms/metadata-terms/boundingBoxDescriptor",
        "Bounding Shapes": "http://purl.org/radx-terms/metadata-terms/boundingShapeDescriptor",
        "Data File Geopolitical Coverage": "http://purl.org/radx-terms/metadata-terms/geopoliticalCoverageDescriptor"
      },
      "Bounding Boxes": [{
        "@id": "http://example.org/62af26bb-eaf2-4f10-b9fc-e044359d31c0",
        "@context": {
          "Maximum Latitude": "http://purl.org/radx-terms/metadata-terms/maxLatitude",
          "Minimum Latitude": "http://purl.org/radx-terms/metadata-terms/minLatitude",
          "Minimum Longitude": "http://purl.org/radx-terms/metadata-terms/minLongitude",
          "Maximum Longitude": "http://purl.org/radx-terms/metadata-terms/maxLongitude"
        },
        "Maximum Latitude": {
          "@value": "-121.208178"
        },
        "Minimum Latitude": {
          "@value": "-122.202653"
        },
        "Minimum Longitude": {
          "@value": "36.892976"
        },
        "Maximum Longitude": {
          "@value": "37.484637"
        }
      }],
      "Bounding Shapes": [{
        "@id": "http://example.org/b639700b-37bb-48ce-8bfa-8db5c655faae",
        "@context": {
          "Point Number": "http://purl.org/radx-terms/metadata-terms/pointNumber",
          "Latitude": "http://purl.org/radx-terms/metadata-terms/latitude",
          "Longitude": "http://purl.org/radx-terms/metadata-terms/longitude"
        },
        "Point Number": {
          "@type": "xsd:decimal",
          "@value": "1"
        },
        "Latitude": {
          "@type": "xsd:decimal",
          "@value": "10"
        },
        "Longitude": {
          "@type": "xsd:decimal",
          "@value": "150"
        }
      }],
      "Data File Geopolitical Coverage": [{
        "@id": "http://example.org/5127d7d7-20d1-4db3-8072-f957cbdc4755",
        "@context": {
          "Geopolitical region ": "http://purl.org/radx-terms/metadata-terms/geographicalPlaceName"
        },
        "Geopolitical region ": [{
          "@value": "[New York City](https://www.geonames.org/5128581)"
        }]
      }]
    }],
    "Data File Elevation Coverage": [{
      "@id": "http://example.org/e76c42ff-b65b-4fda-9830-8f54918a4e13",
      "@context": {
        "Vertical Extent Minimum Value": "http://purl.org/radx-terms/metadata-terms/minElevation",
        "Vertical Extent Maximum Value": "http://purl.org/radx-terms/metadata-terms/maxElevation",
        "Vertical Extent Datum": "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrame",
        "Vertical Extent Datum IRI": "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrameIri"
      },
      "Vertical Extent Minimum Value": {
        "@type": "xsd:decimal",
        "@value": "-1223"
      },
      "Vertical Extent Maximum Value": {
        "@type": "xsd:decimal",
        "@value": "-2.5"
      },
      "Vertical Extent Datum": {
        "@value": "WGS84"
      },
      "Vertical Extent Datum IRI": {
        "@id": "https://epsg.io/4326"
      }
    }],
    "Auxiliary Metadata": {
      "@id": "http://example.org/c4e368e9-0d74-4580-995c-f71792703386",
      "@context": {
        "Data File Descriptive Key-Value Pairs": "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataKeyValuePair",
        "Additional Commentary": "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataCommentary"
      },
      "Data File Descriptive Key-Value Pairs": [""],
      "Additional Commentary": [{
        "@value": null
      }]
    }
  } as unknown as Metadata;



  handleFiles(event: any) : void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.addEventListener("load", event => {
        const contents = reader.result;
        this.metadata = JSON.parse(contents as string) as Metadata;
      }, false);
      reader.readAsText(file);
    }
  }



  ngOnInit(): void {

  }
}
