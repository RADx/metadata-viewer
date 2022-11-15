import { Component, Input, OnInit } from '@angular/core';
import { DataFileParentStudiesElement } from '../metadata';

@Component({
  selector: 'app-parent-study-element',
  templateUrl: './parent-study-element.component.html',
  styleUrls: ['./parent-study-element.component.css']
})
export class ParentStudyElementComponent implements OnInit {

  @Input()
  parentStudyElement? : DataFileParentStudiesElement;

  constructor() { }

  ngOnInit(): void {
  }

}
