import { Component, Input, OnInit } from '@angular/core';
import { PhsIdentifierField } from '../metadata';

@Component({
  selector: 'app-phs-identifier-field',
  templateUrl: './phs-identifier-field.component.html',
  styleUrls: ['./phs-identifier-field.component.css']
})
export class PhsIdentifierFieldComponent implements OnInit {

  @Input()
  phsIdentifierField? : PhsIdentifierField;

  identifierPrefix = "https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=";

  constructor() { }

  ngOnInit(): void {
  }

}
