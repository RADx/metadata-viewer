import {Component, Input, OnInit} from '@angular/core';
import {langTagNames} from "../lang-tag-names";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @Input()
  langTag : string | null | undefined = null;

  constructor() { }

  ngOnInit(): void {
  }

  langTagName() : string {
    if(this.langTag === null || this.langTag === undefined) {
      return "";
    }
    return langTagNames[this.langTag];
  }

}
