export interface Metadata {
  '@id' : string | undefined;
  'Data File Titles' : DataFileTitlesElement [];
  'Data File Identity' : DataFileIdentityElement;
  'Data File Language' : DataFileLanguageElement;
  'Data File Subjects' : DataFileSubjectsElement [];
  'Data File Descriptions' : DataFileDescriptionsElement [];
  'Data File Data Dictionary' : DataFileDataDictionaryElement;
  'Data File Creators' : DataFileCreatorsElement [];
  'Data File Related Resources' : DataFileRelatedResourcesElement [];
  'Data File Contributors' : DataFileContributorsElement [];
  'Data File Rights' : DataFileRightsElement [];
  'Data File Dates' : DataFileDatesElement [];
  'Data File Parent Studies' : DataFileParentStudiesElement [];
  'Data File Funding Sources' : DataFileFundingSourcesElement [];
  'Data File Distributions' : DataFileDistributionsElement [];
  'Data Characteristics Summary' : DataCharacteristicsSummaryElement;
  'Data Sources' : DataSourcesElement [];
  'Data Streams' : DataStreamsElement [];
  'Data File Creation Processes' : DataFileCreationProcessesElement [];
  'Data File Temporal Coverage' : DataFileTemporalCoverageElement [];
  'Data File Spatial Coverage' : DataFileSpatialCoverageElement [];
  'Data File Elevation Coverage' : DataFileElevationCoverageElement [];
  'Auxiliary Metadata' : AuxiliaryMetadataElement;
}


export interface DataFileTitlesElement {
  '@id' : string | undefined;
  'Title' : TitleField;
  'Language' : LanguageField;
}


export interface TitleField {
  '@value' : string | null;
}


export interface LanguageField {
  '@value' : string | null;
}


export interface DataFileIdentityElement {
  '@id' : string | undefined;
  'Identifier' : IdentifierField;
  'Identifier Type' : IdentifierTypeField;
  'File Name ' : FileNameField;
  'Version' : VersionField;
  'SHA256 digest' : Sha256DigestField;
}


export interface IdentifierField {
  '@value' : string | null;
}


export interface IdentifierTypeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface FileNameField {
  '@value' : string | null;
}


export interface VersionField {
  '@value' : string | null;
}


export interface Sha256DigestField {
  '@value' : string | null;
}


export interface DataFileLanguageElement {
  '@id' : string | undefined;
  'Primary Language' : PrimaryLanguageField;
  'Other Languages' : OtherLanguagesField [];
}


export interface PrimaryLanguageField {
  '@value' : string | null;
}


export interface OtherLanguagesField {
  '@value' : string | null;
}


export interface DataFileSubjectsElement {
  '@id' : string | undefined;
  'Subject Identifier' : SubjectIdentifierField;
  'Subject Identifier Scheme' : SubjectIdentifierSchemeField;
  'Keyword' : KeywordField;
}


export interface SubjectIdentifierField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface SubjectIdentifierSchemeField {
  '@value' : string | null;
}


export interface KeywordField {
  '@value' : string | null;
}


export interface DataFileDescriptionsElement {
  '@id' : string | undefined;
  'Description' : DescriptionField;
  'Description Language' : DescriptionLanguageField;
  'Type Of Content' : TypeOfContentField;
}


export interface DescriptionField {
  '@value' : string | null;
}


export interface DescriptionLanguageField {
  '@value' : string | null;
}


export interface TypeOfContentField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DataFileDataDictionaryElement {
  '@id' : string | undefined;
  'Data Dictionary File Name' : DataDictionaryFileNameField;
}


export interface DataDictionaryFileNameField {
  '@value' : string | null;
}


export interface DataFileCreatorsElement {
  '@id' : string | undefined;
  'Creator Type' : CreatorTypeField;
  'Creator Name' : CreatorNameField;
  'Creator Given Name' : CreatorGivenNameField;
  'Creator Family Name' : CreatorFamilyNameField;
  'Creator Identifier' : CreatorIdentifierField;
  'Creator Identifier Scheme' : CreatorIdentifierSchemeField;
  'Creator Email' : CreatorEmailField;
  'Creator Affiliation' : CreatorAffiliationField;
  'Creator Affiliation Identifier' : CreatorAffiliationIdentifierField;
  'Creator Affiliation Identifier Scheme' : CreatorAffiliationIdentifierSchemeField;
  'Creator Role' : CreatorRoleField;
}


export interface CreatorTypeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface CreatorNameField {
  '@value' : string | null;
}


export interface CreatorGivenNameField {
  '@value' : string | null;
}


export interface CreatorFamilyNameField {
  '@value' : string | null;
}


export interface CreatorIdentifierField {
  '@value' : string | null;
}


export interface CreatorIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface CreatorEmailField {
  '@value' : string | null;
}


export interface CreatorAffiliationField {
  '@value' : string | null;
}


export interface CreatorAffiliationIdentifierField {
  '@value' : string | null;
}


export interface CreatorAffiliationIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface CreatorRoleField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DataFileRelatedResourcesElement {
  '@id' : string | undefined;
  'Related Resource Identifier' : RelatedResourceIdentifierField;
  'Related Resource Identifier Type' : RelatedResourceIdentifierTypeField;
  'Related Resource File Name' : RelatedResourceFileNameField;
  'Related Resource Type Category' : RelatedResourceTypeCategoryField;
  'Related Resource Relation' : RelatedResourceRelationField;
}


export interface RelatedResourceIdentifierField {
  '@value' : string | null;
}


export interface RelatedResourceIdentifierTypeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface RelatedResourceFileNameField {
  '@value' : string | null;
}


export interface RelatedResourceTypeCategoryField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface RelatedResourceRelationField {
  '@value' : string | null;
}


export interface DataFileContributorsElement {
  '@id' : string | undefined;
  'Contributor Type' : ContributorTypeField;
  'Contributor Name' : ContributorNameField;
  'Contributor Given Name' : ContributorGivenNameField;
  'Contributor Family Name' : ContributorFamilyNameField;
  'Contributor Identifier' : ContributorIdentifierField;
  'Contributor Identifier Scheme' : ContributorIdentifierSchemeField;
  'Contributor Affiliation' : ContributorAffiliationField;
  'Contributor Affiliation Identifier' : ContributorAffiliationIdentifierField;
  'Contributor Affiliation Identifier Scheme' : ContributorAffiliationIdentifierSchemeField;
  'Contributor Email' : ContributorEmailField;
  'Contributor Role' : ContributorRoleField;
}


export interface ContributorTypeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface ContributorNameField {
  '@value' : string | null;
}


export interface ContributorGivenNameField {
  '@value' : string | null;
}


export interface ContributorFamilyNameField {
  '@value' : string | null;
}


export interface ContributorIdentifierField {
  '@value' : string | null;
}


export interface ContributorIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface ContributorAffiliationField {
  '@value' : string | null;
}


export interface ContributorAffiliationIdentifierField {
  '@value' : string | null;
}


export interface ContributorAffiliationIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface ContributorEmailField {
  '@value' : string | null;
}


export interface ContributorRoleField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DataFileRightsElement {
  '@id' : string | undefined;
  'License Name' : LicenseNameField;
  'License Text' : LicenseTextField;
}


export interface LicenseNameField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface LicenseTextField {
  '@value' : string | null;
}


export interface DataFileDatesElement {
  '@id' : string | undefined;
  'Event Type' : EventTypeField;
  'Date' : DateField;
}


export interface EventTypeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DateField {
  '@value' : string | null;
}


export interface DataFileParentStudiesElement {
  '@id' : string | undefined;
  'PHS Identifier' : PhsIdentifierField;
  'Study Identifier' : StudyIdentifierField;
  'Study Identifier Scheme' : StudyIdentifierSchemeField;
  'Study Name' : StudyNameField;
  'Study Start Date' : StudyStartDateField;
  'Study End Date' : StudyEndDateField;
}


export interface PhsIdentifierField {
  '@value' : string | null;
}


export interface StudyIdentifierField {
  '@value' : string | null;
}


export interface StudyIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface StudyNameField {
  '@value' : string | null;
}


export interface StudyStartDateField {
  '@value' : string | null;
}


export interface StudyEndDateField {
  '@value' : string | null;
}


export interface DataFileFundingSourcesElement {
  '@id' : string | undefined;
  'Award Title' : AwardTitleField;
  'Award Page URL' : AwardPageUrlField;
  'Award Local Identifier' : AwardLocalIdentifierField;
  'Funder Name' : FunderNameField;
  'Funder Identifier' : FunderIdentifierField;
  'Funder Identifier Scheme' : FunderIdentifierSchemeField;
}


export interface AwardTitleField {
  '@value' : string | null;
}


export interface AwardPageUrlField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface AwardLocalIdentifierField {
  '@value' : string | null;
}


export interface FunderNameField {
  '@value' : string | null;
}


export interface FunderIdentifierField {
  '@value' : string | null;
}


export interface FunderIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DataFileDistributionsElement {
  '@id' : string | undefined;
  'Distribution Publisher' : DistributionPublisherField;
  'Distribution Publisher Identifier' : DistributionPublisherIdentifierField;
  'Distribution Publisher Identifier Scheme' : DistributionPublisherIdentifierSchemeField;
  'Distribution Identifier' : DistributionIdentifierField;
  'Distribution Identifier Type' : DistributionIdentifierTypeField;
  'Distribution Format' : DistributionFormatField;
  'Distribution Media Type' : DistributionMediaTypeField;
  'Distribution Size' : DistributionSizeField;
  'Distribution Access Protocol' : DistributionAccessProtocolField;
  'Distribution Access Configuration' : DistributionAccessConfigurationField;
  'Distribution Query Statement' : DistributionQueryStatementField;
  'Data File Publication Date' : DataFilePublicationDateElement;
}


export interface DistributionPublisherField {
  '@value' : string | null;
}


export interface DistributionPublisherIdentifierField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DistributionPublisherIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DistributionIdentifierField {
  '@value' : string | null;
}


export interface DistributionIdentifierTypeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DistributionFormatField {
  '@value' : string | null;
}


export interface DistributionMediaTypeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DistributionSizeField {
  '@value' : string | null;
}


export interface DistributionAccessProtocolField {
  '@value' : string | null;
}


export interface DistributionAccessConfigurationField {
  '@value' : string | null;
}


export interface DistributionQueryStatementField {
  '@value' : string | null;
}


export interface DataFilePublicationDateElement {
  '@id' : string | undefined;
  'Data File Publication Date' : DataFilePublicationDateField;
  'Publication Date Type' : PublicationDateTypeField;
}


export interface DataFilePublicationDateField {
  '@value' : string | null;
}


export interface PublicationDateTypeField {
  '@value' : string | null;
}


export interface DataCharacteristicsSummaryElement {
  '@id' : string | undefined;
  'Data Characteristics Table in HTML' : DataCharacteristicsTableInHtmlField;
  'Data Characteristics Table in CSV' : DataCharacteristicsTableInCsvField;
  'Data Characteristics Table in TSV' : DataCharacteristicsTableInTsvField;
  'Data Characteristics Table in Key-Value Pairs' : DataCharacteristicsTableInKeyValuePairsField [];
}


export interface DataCharacteristicsTableInHtmlField {
  '@value' : string | null;
}


export interface DataCharacteristicsTableInCsvField {
  '@value' : string | null;
}


export interface DataCharacteristicsTableInTsvField {
  '@value' : string | null;
}


export interface DataCharacteristicsTableInKeyValuePairsField {
  '@value' : string | null;
}


export interface DataSourcesElement {
  '@id' : string | undefined;
  'Data Source Name' : DataSourceNameField;
  'Data Source Identifier' : DataSourceIdentifierField;
  'Data Source Identifier Scheme' : DataSourceIdentifierSchemeField;
}


export interface DataSourceNameField {
  '@value' : string | null;
}


export interface DataSourceIdentifierField {
  '@value' : string | null;
}


export interface DataSourceIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DataStreamsElement {
  '@id' : string | undefined;
  'Data Stream Name' : DataStreamNameField;
  'Data Stream Identifier' : DataStreamIdentifierField;
  'Data Stream Identifier Scheme' : DataStreamIdentifierSchemeField;
  'Data Stream Variable Names' : DataStreamVariableNamesField [];
  'Data Stream Data Source Identifier' : DataStreamDataSourceIdentifierField;
}


export interface DataStreamNameField {
  '@value' : string | null;
}


export interface DataStreamIdentifierField {
  '@value' : string | null;
}


export interface DataStreamIdentifierSchemeField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface DataStreamVariableNamesField {
  '@value' : string | null;
}


export interface DataStreamDataSourceIdentifierField {
  '@value' : string | null;
}


export interface DataFileCreationProcessesElement {
  '@id' : string | undefined;
  'Process Name' : ProcessNameField;
  'Process IRI' : ProcessIriField;
  'Process Version' : ProcessVersionField;
  'Process Execution Identifier' : ProcessExecutionIdentifierField;
}


export interface ProcessNameField {
  '@value' : string | null;
}


export interface ProcessIriField {
  '@value' : string | null;
}


export interface ProcessVersionField {
  '@value' : string | null;
}


export interface ProcessExecutionIdentifierField {
  '@value' : string | null;
}


export interface DataFileTemporalCoverageElement {
  '@id' : string | undefined;
  'Temporal Extent Minimum Value' : TemporalExtentMinimumValueField;
  'Temporal Extent Maximum Value' : TemporalExtentMaximumValueField;
  'Temporal Resolution' : TemporalResolutionField;
  'Duration' : DurationField;
}


export interface TemporalExtentMinimumValueField {
  '@value' : string | null;
}


export interface TemporalExtentMaximumValueField {
  '@value' : string | null;
}


export interface TemporalResolutionField {
  '@value' : string | null;
}


export interface DurationField {
  '@value' : string | null;
}


export interface DataFileSpatialCoverageElement {
  '@id' : string | undefined;
  'Bounding Boxes' : BoundingBoxesElement [];
  'Bounding Shapes' : BoundingShapesElement [];
  'Data File Geopolitical Coverage' : DataFileGeopoliticalCoverageElement [];
}


export interface BoundingBoxesElement {
  '@id' : string | undefined;
  'Maximum Latitude' : MaximumLatitudeField;
  'Minimum Latitude' : MinimumLatitudeField;
  'Minimum Longitude' : MinimumLongitudeField;
  'Maximum Longitude' : MaximumLongitudeField;
}


export interface MaximumLatitudeField {
  '@value' : string | null;
}


export interface MinimumLatitudeField {
  '@value' : string | null;
}


export interface MinimumLongitudeField {
  '@value' : string | null;
}


export interface MaximumLongitudeField {
  '@value' : string | null;
}


export interface BoundingShapesElement {
  '@id' : string | undefined;
  'Point Number' : PointNumberField;
  'Latitude' : LatitudeField;
  'Longitude' : LongitudeField;
}


export interface PointNumberField {
  '@value' : string | null;
}


export interface LatitudeField {
  '@value' : string | null;
}


export interface LongitudeField {
  '@value' : string | null;
}


export interface DataFileGeopoliticalCoverageElement {
  '@id' : string | undefined;
  'Geopolitical region ' : GeopoliticalRegionField [];
}


export interface GeopoliticalRegionField {
  '@value' : string | null;
}


export interface DataFileElevationCoverageElement {
  '@id' : string | undefined;
  'Vertical Extent Minimum Value' : VerticalExtentMinimumValueField;
  'Vertical Extent Maximum Value' : VerticalExtentMaximumValueField;
  'Vertical Extent Datum' : VerticalExtentDatumField;
  'Vertical Extent Datum IRI' : VerticalExtentDatumIriField;
}


export interface VerticalExtentMinimumValueField {
  '@value' : string | null;
}


export interface VerticalExtentMaximumValueField {
  '@value' : string | null;
}


export interface VerticalExtentDatumField {
  '@value' : string | null;
}


export interface VerticalExtentDatumIriField {
  '@id' : string | undefined;
  'rdfs:label'? : string;
}


export interface AuxiliaryMetadataElement {
  '@id' : string | undefined;
  'Data File Descriptive Key-Value Pairs' : DataFileDescriptiveKeyValuePairsField [];
  'Additional Commentary' : AdditionalCommentaryField [];
}


export interface DataFileDescriptiveKeyValuePairsField {
  '@value' : string | null;
}


export interface AdditionalCommentaryField {
  '@value' : string | null;
}
